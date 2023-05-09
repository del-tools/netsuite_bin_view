/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/file', 'N/log', 'N/query', 'N/search','N/runtime'],
    /**
     * @param{file} file
     * @param{log} log
     * @param{query} query
     * @param{search} search
     * @param{runtime} runtime
     */
    (file, log, query, search,runtime) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            var scriptObj = runtime.getCurrentScript();

            var folder = scriptObj.getParameter("custscript_del_bins_document_folder");
            var allRecords = [];
            var items_in_bins = search.create({
                type: "item",
                filters:
                    [
                        ["binonhand.quantityonhand","greaterthan","0"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "binnumber",
                            join: "binOnHand",
                            summary: "GROUP",
                            sort: search.Sort.ASC,
                            label: "Bin Number"
                        }),
                        search.createColumn({
                            name: "itemid",
                            summary: "GROUP",
                            label: "Name"
                        }),
                        search.createColumn({
                            name: "quantityonhand",
                            join: "binOnHand",
                            summary: "SUM",
                            label: "On Hand"
                        }),
                        search.createColumn({
                            name: "mpn",
                            summary: "GROUP",
                            label: "MPN"
                        }),
                        search.createColumn({
                            name: "purchasedescription",
                            summary: "GROUP",
                            label: "Purchase Description"
                        }),
                        search.createColumn({
                            name: "custitem_itemwidth",
                            summary: "GROUP",
                            label: "Item Width"
                        }),
                        search.createColumn({
                            name: "custitem_itemheight",
                            summary: "GROUP",
                            label: "Item Height"
                        }),
                        search.createColumn({
                            name: "custitem_itemlength",
                            summary: "GROUP",
                            label: "Item Depth"
                        }),
                        search.createColumn({
                            name: "custitem_del_bin_type_req",
                            summary: "GROUP",
                            label: "Bin Type Requires"
                        }),
                        search.createColumn({
                            name: "custitem_del_bin_lvl_req",
                            summary: "GROUP",
                            label: "Bin Level Required"
                        })
                    ]
            });


            function escapeJSONString(str) {
                return str.replaceAll("\\",'').replaceAll(",",'').replaceAll('"','\\"').replaceAll("\n"," ").replaceAll("\r","").replaceAll("'","\u0027")
            }

            var binSearchObj = search.create({
                type: "bin",
                filters:
                    [
                        ["inactive","is","F"],
                        "AND",
                        ["custrecord_bintype","noneof","@NONE@"],
                        "AND",
                        ["type","anyof","PICKING","STORAGE","NONE"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "binnumber",
                            sort: search.Sort.ASC,
                            label: "Bin Number"
                        }),
                        search.createColumn({name: "custrecord_bintype", label: "Bin Type"}),
                        search.createColumn({name: "custrecord_binlevel", label: "Bin Level"}),
                        search.createColumn({name: "custrecord_bin_picking", label: "Picking Bin?"}),
                        search.createColumn({
                            name: "formulatext",
                            formula: "SUBSTR({binnumber},1,3)",
                            label: "Formula (Text)"
                        }),
                        search.createColumn({name: "custrecord_bin_height", label: "Bin Height"}),
                        search.createColumn({name: "custrecord_bin_width", label: "Bin Width"}),
                        search.createColumn({name: "custrecord_del_bin_pallets", label: "Number of Pallets"})
                    ],
                pageSize: 1000
            });
            var searchObj = binSearchObj.run();
            var resultIndex = 0;
            var resultStep = 1000;
            while (true) {
                var resultSet = searchObj.getRange({
                    start: resultIndex,
                    end: resultIndex + resultStep
                });
                if (!resultSet || resultSet.length == 0) {
                    // no more results
                    break;
                }
                allRecords = allRecords.concat(resultSet);
                resultIndex = resultIndex + resultStep;
            }

            var csv = "BinGroup,bay-number,BinType,BinLvl,picking-bin,bin-width,bin-height,bin-pallets,Bin-Items"
            log.debug(allRecords.length)
            var Iteminbin_array = []
            var items_in_binssearch = items_in_bins.run().each(function(result){
                var bin = result.getText({
                    name: "binnumber",
                    join: "binOnHand",
                    summary: "GROUP"})

                var item = result.getValue({
                    name: "itemid",
                    summary: "GROUP"
                })
                var qty = result.getValue({
                    name: "quantityonhand",
                    join: "binOnHand",
                    summary: "SUM"
                })
                var mpn = result.getValue({
                    name: "mpn",
                    summary: "GROUP",
                })

                var desc = result.getValue({
                    name: "purchasedescription",
                    summary: "GROUP",
                })

                var width = result.getValue({
                    name: "custitem_itemwidth",
                    summary: "GROUP",
                })

                var height = result.getValue({
                    name: "custitem_itemheight",
                    summary: "GROUP",
                })
                var depth = result.getValue({
                    name: "custitem_itemlength",
                    summary: "GROUP",
                })
                var bintype = result.getText({
                    name: "custitem_del_bin_type_req",
                    summary: "GROUP",
                })
                var binlevel = result.getText({
                    name: "custitem_del_bin_lvl_req",
                    summary: "GROUP",
                })

                Iteminbin_array.push({"bin":bin,"item":item,"qty":qty,"mpn":mpn,"desc":desc,"item_width":width,"item_height":height,"item_depth":depth,"binType_req":bintype,"binlvl_req":binlevel})
                return true;
            })
            log.debug("Iteminbin_array",Iteminbin_array)
            for(i=0;i< allRecords.length; i++){
                var ItemsInBinArray = [];
                var bay_number = allRecords[i].getValue({name: "binnumber"})
                Iteminbin_array.forEach(function(result){
                    if(result.bin == bay_number){
                        ItemsInBinArray.push({
                            item: result.item,
                            qty: result.qty,
                            mpn:result.mpn,
                            desc:escapeJSONString(result.desc),
                            width:result.item_width,
                            height:result.item_height,
                            depth:result.item_depth,
                            binlvl_req:result.binlvl_req,
                            binType_req:result.binType_req
                        })
                    }
                    return true;
                });
                //log.debug(i,JSON.stringify(allRecords[i]))
                var BinGroup = allRecords[i].getValue({name: "formulatext"})

                var BinType = allRecords[i].getText({name: "custrecord_bintype"})
                var BinLvl = allRecords[i].getText({name: "custrecord_binlevel"})
                var picking_bin = allRecords[i].getValue({name: "custrecord_bin_picking"})
                var bin_width = allRecords[i].getValue({name: "custrecord_bin_width"})
                var bin_height = allRecords[i].getValue({name: "custrecord_bin_height"})
                var bin_pallets = allRecords[i].getValue({name: "custrecord_del_bin_pallets"})
                csv = csv + `\r\n${BinGroup},${bay_number},${BinType},${BinLvl},${picking_bin},${bin_width},${bin_height},${bin_pallets},${JSON.stringify(ItemsInBinArray).replaceAll(",","/")}`;
            }

            var csvFile = file.create({
                name: 'SAMPLE OUTPUT.csv',
                fileType: file.Type.CSV,
                contents: csv,
                folder: folder
            });
            csvFile.save()

            function getfile(path,name){
                var return_value = null
                var fileSearchObj = search.create({
                    type: "file",
                    filters:
                        [
                            ["folder","anyof",path],
                            "AND",
                            ["name","haskeywords",name]
                        ],
                    columns:
                        [
                            search.createColumn({
                                name: "name",
                                sort: search.Sort.ASC,
                                label: "Name"
                            }),
                            search.createColumn({name: "folder", label: "Folder"}),
                            search.createColumn({name: "documentsize", label: "Size (KB)"}),
                            search.createColumn({name: "url", label: "URL"}),
                            search.createColumn({name: "created", label: "Date Created"}),
                            search.createColumn({name: "modified", label: "Last Modified"}),
                            search.createColumn({name: "filetype", label: "Type"})
                        ]
                });

                fileSearchObj.run().each(function(result){
                    return_value = result.getValue({name:"url"})
                    return true;
                });
                return return_value;
            }


            scriptContext.response.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Warehouse Floorplan</title>
    <link rel="stylesheet" href="${getfile(folder,'warehouse-fp.css')}">
    <script>
    var CSV = \`${csv}\`;
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="${getfile(folder,'warehouse-fs.js')}">
    
</script>
</head>
<body>
<dialog id = "inventorydetail">
    <button id="close-dialog">&times;</button>
    <h2 id = "dialog-title">Dialog Title</h2>
    <p id = "dialog-content">Dialog content goes here.</p>
</dialog>


<dialog id = "mainreport">
    <button id="close-dialog_report">&times;</button>
    <h2 id = "dialog-report-title">Overall Report</h2>
    <div id = "dialog-report-content"></div>
</dialog>

<div id = "controls"><button class="button" id="changeview">Switch View</button></div>
<div id = "header">
    <div class="Heading">Digital Warehouse</div>
    <div class = "filters">
        <span class="fs-15">Errors:</span>
        <select id = "filter-flag">
            <option value = "flag_all">Any</option>
            <option value = "flag_non_errors">None</option>
            <option value = "flag_any">All Errors</option>
            <option value = "flag_sku">Too Many SKUS</option>
            <option value = "flag_itm_vol">Item Volume Error</option>
            <option value = "flag_bin_vol">Bin Volume Error</option>
<!--            <option value = "flag_bin_type">Bin Type Error</option>-->
<!--            <option value = "flag_bin_level">Bin Level Error</option>-->
            <option value = "both_errors">Bin Type Error or Bin Level Error</option>

        </select>
        <span class="fs-15">Utilization:</span>
        <select id = "filter-utl">
            <option value = "utl_all">All</option>
            <option value = "utl_low">Under</option>
            <option value = "utl_over">Over</option>
            <option value = "utl_free">Free</option>
        </select>
        <button class="button" id = "update-Search">Update</button>
    </div>
    <div class ="MainReport_div"><button class="button" id = "MainReport_Button">View Overall Report</button></div>
</div>
<div id="root"></div>
<div id="footer"></div>

<!--<div id="footer" class="footer-css">-->
<!--    <div id="asile-utl">-->
<!--        <p><span id="dynamicAsile" class="fs-15">Asile Utilization <span id="asile-no"></span></span>:<span id="asUTL"></span></p>-->

<!--    </div>-->
<!--    <div id="warehouse-utl">-->
<!--        <p><span class="fs-15">Warehouse Utilization</span>:<span id="wsUTL"></span></p>-->
<!--    </div>-->
<!--</div>-->
</body>
</html>`)
        }

        return {onRequest}

    });
