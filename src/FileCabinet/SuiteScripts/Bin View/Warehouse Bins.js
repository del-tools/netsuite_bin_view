/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/file', 'N/log', 'N/query', 'N/search'],
    /**
 * @param{file} file
 * @param{log} log
 * @param{query} query
 * @param{search} search
 */
    (file, log, query, search) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            var allRecords = [];
            var binSearchObj = search.create({
                type: "bin",
                filters:
                    [
                        ["inactive","is","F"],
                        "AND",
                        ["custrecord_bintype","noneof","@NONE@"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "binnumber",
                            sort: search.Sort.ASC,
                            label: "Bin Number"
                        }),
                        search.createColumn({name: "custrecord_bintype", label: "Bin Type"}),
                        search.createColumn({name: "custrecord_bin_picking", label: "Picking Bin?"}),
                        search.createColumn({
                            name: "formulatext",
                            formula: "SUBSTR({binnumber},1,3)",
                            label: "Formula (Text)"
                        })
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

            var csv = "BinGroup,bay-number,BinType,picking-bin"
            log.debug(allRecords.length)
            for(i=0;i< allRecords.length; i++){
                //log.debug(i,JSON.stringify(allRecords[i]))
                var BinGroup = allRecords[i].getValue({name: "formulatext"})
                var bay_number = allRecords[i].getValue({name: "binnumber"})
                var BinType = allRecords[i].getText({name: "custrecord_bintype"})
                var picking_bin = allRecords[i].getValue({name: "custrecord_bin_picking"})
                csv = csv + `\r\n${BinGroup},${bay_number},${BinType},${picking_bin}`;
            }

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
    <link rel="stylesheet" href="${getfile(1541074,'warehouse-fp.css')}">
    <script>
    var CSV = \`${csv}\`;
    </script>
    <script src="${getfile(1541074,'warehouse-fs.js')}">
    
</script>
</head>
<body>

    <div id="root"></div>
    
</body>
</html>`)
        }

        return {onRequest}

    });
