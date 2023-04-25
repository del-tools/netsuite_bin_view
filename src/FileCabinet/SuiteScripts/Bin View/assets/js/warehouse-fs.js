const lowutl = 60;
var volumearray = {}

function getdata() {
	let outarray = [];
	let jsondata = csvJSON(CSV);




	jsondata.forEach(function(bin) {
		// console.log(bin["Bin-Items"].replaceAll("/",",").replace(/""/g, '"').replace(/^"(.*)"$/, '$1'))
		var items = JSON.parse(bin["Bin-Items"].replaceAll("/",",").replaceAll(/""/g, '"').replace(/^"(.*)"$/, '$1'))
		var isnewbin = true;
		var newBinsArray = [];
		var i = 0;
		outarray.forEach(function(arrayvalue) {

			if (arrayvalue.bingroup === bin["BinGroup"]) {
				var newBin = {
					"bay-number": bin["bay-number"],
					"BinTypeShort": shortbins(bin["BinType"]).name,
					"BinTypeModifier": shortbins(bin["BinType"]).UTL_mod,
					"palletbin": shortbins(bin["BinType"]).palletbin,
					"picking-bin": bin["picking-bin"],
					"bin-width": bin["bin-width"],
					"bin-height": bin["bin-height"],
					"bin-pallets": bin["bin-pallets"],
					"req_BinType": shortreqbins(bin["req_BinType"]).name,
					"req_BinLevel": bin["req_BinLevel"],
					"Bin-Items":items
				}
				outarray[i].bins.push(newBin);
				isnewbin = false;
			}
			i++
		});

		if (isnewbin === true) {
			outarray.push({
				"bingroup": bin["BinGroup"],
				"bins": [{
					"bay-number": bin["bay-number"],
					"BinTypeShort": shortbins(bin["BinType"]).name,
					"BinTypeModifier": shortbins(bin["BinType"]).UTL_mod,
					"palletbin": shortbins(bin["BinType"]).palletbin,
					"picking-bin": bin["picking-bin"],
					"bin-width": bin["bin-width"],
					"bin-height": bin["bin-height"],
					"bin-pallets": bin["bin-pallets"],
					"req_BinType": shortreqbins(bin["req_BinType"]).name,
					"req_BinLevel": bin["req_BinLevel"],
					"Bin-Items":items
				}]
			});
		}
	});



	return outarray;
}


var chartColors = {
	background:{
		"All":"rgba(201, 203, 207, 0.2)",
		"B-FH":"rgba(255, 99, 132, 0.2)",
		"B-HH":"rgba(255, 159, 64, 0.2)",
		"P-FH":"rgba(255, 205, 86, 0.2)",
		"P-HH":"rgba(75, 192, 192, 0.2)",
		"S-L":"rgba(54, 162, 235, 0.2)",
		"S-R":"rgba(153, 102, 255, 0.2)"
	},
	border:{
		"All":"rgb(201, 203, 207)",
		"B-FH":"rgb(255, 99, 132)",
		"B-HH":"rgb(255, 159, 64)",
		"P-FH":"rgb(255, 205, 86)",
		"P-HH":"rgb(75, 192, 192)",
		"S-L":"rgb(54, 162, 235)",
		"S-R":"rgb(153, 102, 255)"
	},
}

function shortbins(bintype) {
	switch (bintype) {
		case 'Pallet - Oversize':
			return{
				name:'P-OS',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Pallet - Half Height':
			return{
				name:'P-HH',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Bulk - Half Height':
			return{
				name:'B-HH',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Bulk - Full Height':
			return{
				name:'B-FH',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Bulk - Tiny Height':
			return{
				name:'B-TH',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Pallet - Full Height':
			return{
				name:'P-FH',
				UTL_mod:0.3,
				palletbin:true
			}
			break;
		case 'Goods Out Zone':
			return{
				name:'GO',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		case 'Shelf - Racking':
			return{
				name:'S-R',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		case 'Shelf - Low Bay':
			return{
				name:'S-L',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		case 'Goods In Zone':
			return{
				name:'GI',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		case 'Trolley':
			return{
				name:'TR',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		case 'Unknown':
			return{
				name:'UN',
				UTL_mod:0.3,
				palletbin:false
			}
			break;
		default:
			return{
				name:'UN',
				UTL_mod:0.3,
				palletbin:false
			}
	}
}

function shortreqbins(req_BinType) {
	switch (req_BinType) {
		case 'Pallet - Oversize':
			return{
				name:'P-OS',

			}
			break;
		case 'Pallet - Half Height':
			return{
				name:'P-HH',

			}
			break;
		case 'Bulk - Half Height':
			return{
				name:'B-HH',

			}
			break;
		case 'Bulk - Full Height':
			return{
				name:'B-FH',

			}
			break;
		case 'Bulk - Tiny Height':
			return{
				name:'B-TH',

			}
			break;
		case 'Pallet - Full Height':
			return{
				name:'P-FH',

			}
			break;
		case 'Goods Out Zone':
			return{
				name:'GO',

			}
			break;
		case 'Shelf - Racking':
			return{
				name:'S-R',

			}
			break;
		case 'Shelf - Low Bay':
			return{
				name:'S-L',

			}
			break;
		case 'Goods In Zone':
			return{
				name:'GI',

			}
			break;
		case 'Trolley':
			return{
				name:'TR',

			}
			break;
		case 'Unknown':
			return{
				name:'UN',

			}
			break;
		default:
			return{
				name:'UN',

			}
	}
}


function csvJSON(csv) {

	var lines = csv.split("\n");

	var result = [];

	var headers = lines[0].split(",");

	for (var i = 1; i < lines.length; i++) {

		var obj = {};
		var currentline = lines[i].split(",");

		for (var j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j];
		}

		result.push(obj);

	}

	//return result; //JavaScript object
	return result; //JSON
}




var jsonData = getdata();

console.log(jsonData)


onload = function(currentfilters) {
	var currentfilters = {
		main:{
			not:[],
			other:[]
		},
		report:{
			not:[],
			other:[]
		}
	};
	volumearray = {
		"B-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"B-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"S-L":{
			"Available Space":0,
			"Used Space":0
		},
		"S-R":{
			"Available Space":0,
			"Used Space":0
		}
	}

	var volumearrayall = {
		"B-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"B-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"S-L":{
			"Available Space":0,
			"Used Space":0
		},
		"S-R":{
			"Available Space":0,
			"Used Space":0
		}
	}

	const baseDiv = document.getElementById("root");
	const footerDiv = document.getElementById("footer");
	const data = jsonData
	var totalbinvolume_all = 0
	var totalItemvolume_all = 0
	var dialog = document.getElementById("inventorydetail")
	var dialog_content = document.getElementById("dialog-content")
	var dialog_title = document.getElementById("dialog-title")
	var closeBtn = document.getElementById('close-dialog');

	// var totalUtlBin = 0;

	let a = 1;
	let odd;
	let even;
	let asileUtl;
	let wsUtl;

	let aisle = null;
	var asile_count= 0;

	var totalbinaval = 0;
	var totalitmused = 0;

	for (let j = 0; j < data.length; j++) {
	//for (let j = 0; j < 1; j++) {
		let number = data[j].bingroup.slice(-2);
		var aislename = data[j].bingroup.substring(0, 1);
		if (aisle != aislename) {

			volumearray["B-FH"]["Available Space"] = 0;
			volumearray["B-FH"]["Used Space"] = 0;
			volumearray["B-HH"]["Available Space"] = 0;
			volumearray["B-HH"]["Used Space"] = 0;
			volumearray["P-FH"]["Available Space"] = 0;
			volumearray["P-FH"]["Used Space"] = 0;
			volumearray["P-HH"]["Available Space"] = 0;
			volumearray["P-HH"]["Used Space"] = 0;
			volumearray["S-L"]["Available Space"] = 0;
			volumearray["S-L"]["Used Space"] = 0;
			volumearray["S-R"]["Available Space"] = 0;
			volumearray["S-R"]["Used Space"] = 0;

			//console.log("New Array",volumearray)

			totalbinaval = 0;
			totalitmused = 0;
			asile_count++
			aisle = data[j].bingroup.substring(0, 1);
			odd = document.createElement("div");
			even = document.createElement("div");
			const aisleDiv = document.createElement("div");

			aisleDiv.classList.add("aisle",);
			aisleDiv.id= "aisle-"+aislename
			baseDiv.appendChild(aisleDiv);
			odd.classList.add("odd");
			even.classList.add("even");
			aisleDiv.appendChild(odd);
			aisleDiv.appendChild(even);

			asileUtl = document.createElement("div");
			wsUtl = document.createElement("div");

			asileUtl.setAttribute('id', 'asileUtl');
			wsUtl.setAttribute('id', 'wsUtl');

		}
		////console.log(volumearray)

		asileUtl.innerHTML = `<p><span class="fs-15">Asile Utilization <span>${data[j].bingroup.substring(0, 1)}</span></span>:<span></span></p>`;
		


		const bay = document.createElement("div");
		bay.classList.add("bay");
		var isOdd = false;
		var calc_number = number % 2
		if (calc_number !== 0) {
			isOdd = true
		}

		if(isOdd){
			odd.appendChild(bay);
			const binGroup = document.createElement("div");
			binGroup.classList.add("bin-group");
			binGroup.textContent = data[j].bingroup;
			bay.appendChild(binGroup);
		}else{
			const binGroup = document.createElement("div");
			binGroup.classList.add("bin-group");
			binGroup.textContent = data[j].bingroup;
			bay.appendChild(binGroup);
			even.appendChild(bay);
		}


		const binGroup_bins = document.createElement("div");
		binGroup_bins.classList.add("binGroup_bins")
		for (let i = 0; i < data[j].bins.length; i++) {

			const ailseData = data[j].bins[i];
			var csspicking = "non-picking-bin"
			if(ailseData["picking-bin"] == 'true'){
				csspicking = "picking-bin"
			}

			var binsequence = ailseData["bay-number"].slice(-1);
			const binTypeShort = document.createElement("div");
			binTypeShort.dataset.itemcount = ailseData["Bin-Items"].length;
			binTypeShort.dataset.bin = ailseData["bay-number"];
			var utl_used = 0;
			var flag_items = false
			var flag_bin = false

			var utl_avl = 0;

			if(data[j].bingroup.substring(0, 1) === "D" || data[j].bingroup.substring(0, 1) === "M"){

				utl_avl = ailseData["bin-width"] * ailseData["bin-height"]*60;

			} else {

				utl_avl = ailseData["bin-width"] * ailseData["bin-height"]*90;
			}
			////console.log(ailseData["BinTypeModifier"])


			if(ailseData["BinTypeModifier"] > 0){
				utl_avl = utl_avl * (1-ailseData["BinTypeModifier"])
			}
			if(ailseData["bin-pallets"]){
				var palletPercent = 1/ailseData["bin-pallets"]
			}else{
				ailseData["palletbin"] = false;
			}



			for(var z=0;z < ailseData["Bin-Items"].length;z++){
				var tempitem_utl = 0
				if(!isEmpty(ailseData["Bin-Items"][z].depth)||!isEmpty(ailseData["Bin-Items"][z].height)||!isEmpty(ailseData["Bin-Items"][z].width)){
					tempitem_utl = (ailseData["Bin-Items"][z].depth * ailseData["Bin-Items"][z].height * ailseData["Bin-Items"][z].width) * ailseData["Bin-Items"][z].qty;
				}

				if(tempitem_utl == 0){
					binTypeShort.classList.add("flag_itm_vol","FLAG", "col-red");
				}
				if(ailseData["BinTypeShort"] !== ailseData["req_BinType"]){
					binTypeShort.classList.add("flag_bin_type","FLAG", "col-red");
				}
				if(ailseData["palletbin"]){
					ailseData["Bin-Items"][z].itemutl = (palletPercent*100).toFixed(0)
					try {
						volumearray[ailseData["BinTypeShort"]]["Used Space"] += parseInt(palletPercent * utl_avl);
						volumearrayall[ailseData["BinTypeShort"]]["Used Space"] += parseInt(palletPercent * utl_avl);
					}catch (e){
					}
				}else{
					ailseData["Bin-Items"][z].itemutl = ((tempitem_utl/utl_avl)*100).toFixed(0)
					try {
						volumearray[ailseData["BinTypeShort"]]["Used Space"] += parseInt(tempitem_utl);
						volumearrayall[ailseData["BinTypeShort"]]["Used Space"] += parseInt(tempitem_utl);
						if(ailseData["BinTypeShort"] == "S-R"){
						}
					}catch (e){
					}
				}
				utl_used = utl_used + tempitem_utl
			}
			if(ailseData["palletbin"]){

				binTypeShort.dataset.utl = ((palletPercent*binTypeShort.dataset.itemcount)*100).toFixed(0)
			}else{
				binTypeShort.dataset.utl = ((utl_used/utl_avl)*100).toFixed(0)
			}
			try{
				volumearray[ailseData["BinTypeShort"]]["Available Space"] += parseInt(utl_avl);
				volumearrayall[ailseData["BinTypeShort"]]["Available Space"] += parseInt(utl_avl);
			}catch (e) {
				////console.log("volumearray Error")
			}

			////console.log(volumearray)
			binTypeShort.dataset.items = JSON.stringify(ailseData["Bin-Items"]);
			if(isEmpty(ailseData["bin-width"])||isEmpty(ailseData["bin-height"]) || ailseData["BinTypeShort"] === 'GO' || ailseData["BinTypeShort"] === 'GI'){
				binTypeShort.classList.add("flag_bin_vol");
			} else if(isEmpty(ailseData["bin-width"])||isEmpty(ailseData["bin-height"])) {
				binTypeShort.classList.add("flag_bin_vol","FLAG","col-red");
			}



			// binTypeShort.dataset.utl = ((utl_used / utl_avl) * 100).toFixed(0);

			binTypeShort.dataset.pallets = ailseData["bin-pallets"];

			if (binTypeShort.dataset.utl<lowutl){
				binTypeShort.classList.add("utl_low");
			}
			if(binTypeShort.dataset.utl >100){
				binTypeShort.classList.add("utl_over");
			}

			if(binTypeShort.dataset.itemcount < 1){
				binTypeShort.dataset.utl = 0;
				binTypeShort.classList.add("utl_free");
			}
			var fixed_utl = 100;
			if(binTypeShort.dataset.utl < 100){
				fixed_utl = binTypeShort.dataset.utl;
			}

			// if (ailseData["BinTypeShort"] === 'GO'){
			// 	binTypeShort.innerHTML = `<div class = "utilisation none-flag" style = "height:${fixed_utl}%;"></div><div class ="binpart_title"><div class = "rotate">${binsequence}</div></div><div class = "binpart_type"><div class = "rotate">Outbound Staging</div></div>`;
			// } else if( ailseData["BinTypeShort"] === 'GI'){
			// 	binTypeShort.innerHTML = `<div class = "utilisation" style = "height:${fixed_utl}%;"></div><div class ="binpart_title"><div class = "rotate">${binsequence}</div></div><div class = "binpart_type"><div class = "rotate">Inbound Staging</span></div></div>`;
			// }
			// else {
			binTypeShort.innerHTML = `<div class = "utilisation" style = "height:${fixed_utl}%;"></div><div class ="binpart_title"><div class = "rotate">${binsequence}</div></div><div class = "binpart_type"><div class = "rotate">${ailseData["BinTypeShort"]}<span class = "percentage">${binTypeShort.dataset.utl}%</span></div></div>`;
			//}
			if(ailseData["Bin-Items"].length != 0){
				if(binTypeShort.dataset.itemcount > binTypeShort.dataset.pallets && ["P-OS","B-HH","B-FH","B-TH","P-FH","P-HH","","","","",""].indexOf(ailseData.BinTypeShort) > -1){
					binTypeShort.classList.add("FLAG","flag_sku","col-red");
					binTypeShort.dataset.bin = ailseData["bay-number"];
				}
				binTypeShort.classList.add("clickable");
				binTypeShort.dataset.utlvol = utl_avl
				binTypeShort.addEventListener("click", function(e){
				e.stopPropagation(); // Prevents the event from bubbling up to the window
					var bin_number = this.dataset.bin
					var items = JSON.parse(this.dataset.items);
					var htmloutput = ""
					if(this.classList.contains("flag_sku")){
						htmloutput = `<div class = "error">This bin has ${binTypeShort.dataset.itemcount} pallets, bin can only hold ${binTypeShort.dataset.pallets}</div>`
					}
					if(this.classList.contains("flag_bin_vol")){
						htmloutput = `<div class = "error">This bin has is missing volumetric data (Height = "${ailseData["bin-width"]}" & Length = "${ailseData["bin-height"]}")</div>`
					}
					if(this.classList.contains("flag_itm_vol")){
						htmloutput = `<div class = "error">This bin has items which are missing volumetric data</div>`
					}
					htmloutput = htmloutput + "<table><tr><th>Item</th><th>MPN</th><th>Description</th><th>Quantity On Hand</th><th>UTL</th><th class = 'extrainfo'>Width</th><th class = 'extrainfo'>Height</th><th class = 'extrainfo'>Depth</th></tr>"

					//INDER PLEASE LOOK INTO WHY THIS IS NOT CALCULATING AS EXPECTED
					items.forEach(function(item){
						var highlight_row = ""
						if(isEmpty(item.width)||isEmpty(item.height)||isEmpty(item.depth)){
							highlight_row = " class = 'rowhighlight'";
						}
						htmloutput = htmloutput + `<tr ${highlight_row}><td>${item.item}</td><td>${item.mpn}</td><td>${item.desc}</td><td>${item.qty}</td><td>${item.itemutl + "%"}</td><td class = 'extrainfo'>${item.width}</td><td class = 'extrainfo'>${item.height}</td><td class = 'extrainfo'>${item.depth}</td></tr>`;
					})
					htmloutput = htmloutput + `</table>
<button id = "viewmore" onclick="document.querySelectorAll('.extrainfo').forEach(element => {element.style.display = 'table-cell';});">View Extra Detail</button>`;


					dialog_title.innerHTML=  `${bin_number} [${ailseData.BinTypeShort}] - ${binTypeShort.dataset.utlvol}`;
					dialog_content.innerHTML = htmloutput;
					dialog.show();
					// ////console.log(`Width ${items[1]}`);
				}, false);
			}
			 if (ailseData.BinTypeShort === "P-OS") {
				binTypeShort.classList.add("bin", "bintype-pos",csspicking);
			} else if (ailseData.BinTypeShort === "B-HH") {
				binTypeShort.classList.add("bin", "bintype-b-hh",csspicking);
			} else if (ailseData.BinTypeShort === "B-FH") {
				 binTypeShort.classList.add("bin", "bintype-b-fh",csspicking);
			 }else if (ailseData.BinTypeShort === "B-TH") {
			 	binTypeShort.classList.add("bin", "bintype-b-th",csspicking);
			 } else if (ailseData.BinTypeShort === "GO") {
				binTypeShort.classList.add("bin", "bintype-go",csspicking);
			} else if (ailseData.BinTypeShort === "GI") {
				binTypeShort.classList.add("bin", "bintype-gi",csspicking);
			} else if (ailseData.BinTypeShort === "P-FH") {
				binTypeShort.classList.add("bin", "bintype-p-fh",csspicking);
			} else if (ailseData.BinTypeShort === "P-HH") {
				binTypeShort.classList.add("bin", "bintype-p-hh",csspicking);
			} else if (ailseData.BinTypeShort === "S-R") {;
				 binTypeShort.classList.add("bin", "bintype-s-r",csspicking);
			 }else if (ailseData.BinTypeShort === "TR") {;
				 binTypeShort.classList.add("bin", "bintype-tr",csspicking);
			 }else if (ailseData.BinTypeShort === "S-L") {
				 binTypeShort.classList.add("bin", "bintype-s-l",csspicking);
			 }
			 else{
				 binTypeShort.classList.add("bin",csspicking);
			 }

			binGroup_bins.appendChild(binTypeShort);
		}
		bay.appendChild(binGroup_bins);

		var nextaisle_new = false

		if(j+1 < data.length ){
			if (data[j].bingroup.substring(0, 1) != data[j+1].bingroup.substring(0, 1)) {
				////console.log(data[j].bingroup.substring(0, 1) + " <> " + data[j+1].bingroup.substring(0, 1) )
				nextaisle_new = true;
			}
		}else{
			nextaisle_new = true;
		}
/*
Add a percentage utilised per Bin type per Aisle in the middle of the Aisle. e.g. of the total number of "Bulk - Full Height"
for that Aisle is 100, and 60 of them are used, then have a chart (similar style to bins) that is 60% full with
the words "60/100 used \r \n 40 available". For "Shelf" types, the % available in volume should be used,
e.g. a chart that is 60% full and the words "60% used \r \n 40% available". Only the following bins should be used:
Bulk - Full Height
Bulk - Half Height
Pallet - Full Height
Pallet - Half Height
Shelf - Low Bay
Shelf - Racking


ARRAY
volumearray = {
		"B-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"B-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-FH":{
			"Available Space":0,
			"Used Space":0
		},
		"P-HH":{
			"Available Space":0,
			"Used Space":0
		},
		"S-L":{
			"Available Space":0,
			"Used Space":0
		},
		"S-R":{
			"Available Space":0,
			"Used Space":0
		},
	}

	EXAMPLE volumearray["P-FH"]["Available Space"]
 */


		if(nextaisle_new){
			var utltest = document.createElement("div");
			utltest.classList.add("asilereport");
			totalbinvolume_all += totalbinaval
			totalItemvolume_all += totalitmused

			var chartnode = document.createElement("canvas");
			chartnode.id = "chart-"+data[j].bingroup.substring(0, 1);
			chartnode.classList.add("aisle_report_canvas")
			utltest.appendChild(chartnode)

			var aisleDiv = document.getElementById("aisle-"+data[j].bingroup.substring(0, 1))

			aisleDiv.appendChild(utltest);
			const ctx = document.getElementById("chart-"+data[j].bingroup.substring(0, 1));
			var labels = []
			var objData = []
			var colors = {
				background:[],
				border:[]
			}
			for (let key of Object.keys(volumearray)) {
				if(volumearray[key]["Used Space"] > 0){
					labels.push(key)
					colors.background.push(chartColors.background[key])
					colors.border.push(chartColors.border[key])
					objData.push({
						type:key,
						utl:volumearray[key]["Used Space"]/volumearray[key]["Available Space"],
						used:volumearray[key]["Used Space"],
						available:volumearray[key]["Available Space"],
					})
				}
			}




			const config = {
				type: 'bar',
				data: {
					labels: labels,
					datasets: [{
						label: 'Bin Utilisation By Type',
						data: objData,
						backgroundColor: colors.background,
						borderColor: colors.border,
						borderWidth: 1,
					},{
						label: 'Wanted UTL',
						data: [1,1,1,1,1,1],
						type:"line",
						display:false
					}

					]
				},
				options: {
					responsive: true,
					parsing: {
						xAxisKey: 'type',
						yAxisKey: 'utl'
					},
					onClick: (e) => {
						var aisleid = `aisle-${chart.canvas.id.slice(-1)}`
						////console.log(chart);
						currentfilters.report.not = [];
						currentfilters.report.other = [];
						const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
						// Substitute the appropriate scale IDs
						const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
						const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
						var classname = `bintype-${chart.config["_config"].data.labels[dataX].toLowerCase()}`
						if(chart.config["_config"].data.datasets[0].data[dataX].utl < dataY){
							updatefilters(currentfilters)
						}else if(isNaN(chart.config["_config"].data.datasets[0].data[dataX].utl)){
							updatefilters(currentfilters)
						}else{
							currentfilters.report.not.push(`.${classname}`);
							updatefilters(currentfilters)
						}
					},
					plugins:{
						legend: {
							display: false
						},
						tooltip:{
							callbacks:{
								footer:(context) => {
									if(context[0].datasetIndex == 0){
										return(`Aval : ${context[0].raw.available}\nUsed:${context[0].raw.used}\nFree: ${context[0].raw.available-context[0].raw.used}`)
									}
								}
							}
						}
					},
					scales: {
						y: {
							display: true,
							ticks: {
								min: 0,
								max: 1,
								stepSize: 0.25,
								callback: function(label, index, labels) {
									return label*100+'%';
								}

							}
						},
					}
				},
			};
			const chart =new Chart(ctx,config);
		}
	}
	console.log(volumearrayall)


	var chartnode = document.createElement("canvas");
	chartnode.id = "chart-All";
	//chartnode.classList.add("aisle_report_canvas")
	const report_dialog = document.getElementById("mainreport");

	const chartdatanode = document.createElement("div");
	chartdatanode.classList.add("reportOverview");
	//chartdatanode.innerHTML = "<h1>test</h1>"
	//report_dialog.appendChild(chartdatanode)
	report_dialog.appendChild(chartnode)
	const ctx = document.getElementById("chart-All");
	var labels = []
	var objData = []
	var allcolors = {
		background:[],
		border:[]
	}
	labels.push("ALL");

	var totalavailable = 0
	var totalused = 0;
	for (let key of Object.keys(volumearrayall)) {
		if(volumearrayall[key]["Used Space"] > 0){
			labels.push(key)
			totalavailable+=volumearrayall[key]["Available Space"];
			totalused+=volumearrayall[key]["Used Space"];
			allcolors.background.push(chartColors.background[key])
			allcolors.border.push(chartColors.border[key])
			objData.push({
				type:key,
				utl:volumearrayall[key]["Used Space"]/volumearrayall[key]["Available Space"],
				used:volumearrayall[key]["Used Space"],
				available:volumearrayall[key]["Available Space"],
			})
		}
	}
	allcolors.background.push(chartColors.background["All"])
	allcolors.border.push(chartColors.border["All"])
	objData.push({
		type:"ALL",
		utl:totalused/totalavailable,
		used:totalused,
		available:totalavailable,
	})

	const config = {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: 'Bin Utilisation By Type',
				data: objData,
				backgroundColor: allcolors.background,
				borderColor: allcolors.border,
				borderWidth: 1,
			},{
				label: 'Wanted UTL',
				data: [1,1,1,1,1,1,1],
				type:"line",
				display:false
			}

			]
		},
		options: {
			responsive: true,
			parsing: {
				xAxisKey: 'type',
				yAxisKey: 'utl'
			},
			plugins:{
				legend: {
					display: false
				},
				tooltip:{
					callbacks:{
						footer:(context) => {
							if(context[0].datasetIndex == 0){
								return(`Aval : ${context[0].raw.available}\nUsed:${context[0].raw.used}\nFree: ${context[0].raw.available-context[0].raw.used}`)
							}
						}
					}
				}
			},
			scales: {
				y: {
					display: true,
					ticks: {
						min: 0,
						max: 1,
						stepSize: 0.25,
						callback: function(label, index, labels) {
							return label*100+'%';
						}

					}
				},
			}
		},
	};
	const chart =new Chart(ctx,config);




	var domAisles = document.getElementsByClassName("aisle");

	const mainreportbutton = document.getElementById("MainReport_Button");
	mainreportbutton.addEventListener("click", function(){
		const report_dialog = document.getElementById("mainreport");
		report_dialog.show();
	}, false);

	const mainreportclosebutton = document.getElementById("close-dialog_report");

	mainreportclosebutton.addEventListener("click", function(){
		const report_dialog = document.getElementById("mainreport");
		report_dialog.close()
	}, false);

	for(l=0;l<domAisles.length;l++){
		domAisles[l].children
		var oddaisle = domAisles[l].children[0]
		var evenaisle = domAisles[l].children[1]
		var oddbays = oddaisle.children.length
		var evenbays = evenaisle.children.length
		const bay = document.createElement("div");
		bay.classList.add("bay");
		if(oddbays == 0){

			oddaisle.appendChild(bay)
		}
		if(evenbays == 0){
			evenaisle.appendChild(bay)
		}
	}




	wsUtl.innerHTML = `<p><span class="fs-15">Warehouse Utilization</span>:<span></span></p>`;
	
	baseDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`

	footerDiv.style = `grid-template-columns: repeat(${(asile_count+1)}, 1fr);`

	// footerDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`
	//baseDiv.style = `grid-template-columns: repeat(2, 1fr);gap: 100px 10px;`
	////console.log(asile_count+1);
var current_view = 0;

	const changeview_button = document.getElementById("changeview");
	changeview_button.addEventListener("click", function(){
		if(current_view == 0){
			baseDiv.style = `grid-template-columns: repeat(4, 1fr);gap: 100px 10px;`
			current_view = 1;
		}else{
			baseDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`
			current_view = 0;
		}

	}, false);




	closeBtn.addEventListener('click', () => {
		dialog.close();
	});
	var filter_button = document.getElementById("update-Search");
	var filter_flag = document.getElementById("filter-flag");
	var filter_utl = document.getElementById("filter-utl");
	filter_button.addEventListener('click', () => {
		currentfilters = {
			main:{
				not:[],
				other:[]
			},
			report:{
				not:[],
				other:[]
			}
		};
		var filter_flag_text = filter_flag.options[filter_flag.selectedIndex].value
		var filter_utl_text = filter_utl.options[filter_utl.selectedIndex].value
		switch (filter_flag_text) {
			case "flag_all":
				break;
			case "flag_any":
				currentfilters.main.not.push(".FLAG");
				break;
			case "flag_non_errors":
				currentfilters.main.other.push(".FLAG");
				break;

			case "flag_sku":
				currentfilters.main.not.push(".flag_sku");
				break;
			case "flag_itm_vol":
				currentfilters.main.not.push(".flag_itm_vol");
				break;
			case "flag_bin_vol":
				currentfilters.main.not.push(".flag_bin_vol");
				break;
			case "flag_bin_type":
				currentfilters.main.not.push(".flag_bin_type");
				break;
		}
		switch (filter_utl_text) {
			case "utl_all":
				break;
			case "utl_free":
				currentfilters.main.not.push(".utl_free");
				break;
			case "utl_low":
				currentfilters.main.not.push(".utl_low");
				break;
			case "utl_over":
				currentfilters.main.not.push(".utl_over");
				break;
		}
		updatefilters(currentfilters);


	});

	dialog.addEventListener('click', (e) => {
		e.stopPropagation(); // Prevents the event from bubbling up to the window
	});
	window.addEventListener('click', (e) => {
			if (e.target !== dialog && !dialog.contains(e.target)) {
				dialog.close();
			}

	});


	function updatefilters(filterarray){
		var elements = document.querySelectorAll('.bin');
		elements.forEach(element => {
			element.style.opacity = 1;
		});
		var filterstring = ".bin"
		filterarray.main.other.forEach(function(filter){
			filterstring = filterstring + filter
		})
		filterarray.report.other.forEach(function(filter){
			filterstring = filterstring + filter
		})

		filterstring = filterstring + ":not(";
		filterarray.main.not.forEach(function(filter){
			filterstring = filterstring + filter
		})
		filterarray.report.not.forEach(function(filter){
			filterstring = filterstring + filter
		})
		filterstring = filterstring + ")";

		filterstring = filterstring.replace(":not()","")
		if(filterstring != ".bin"){
			var elements = document.querySelectorAll(filterstring);
			elements.forEach(element => {
				element.style.opacity = 0.3;
			});
		}

	}
	function isEmpty(strval){
		if(strval == "" || strval == " " || strval == null || strval == undefined){
			return true;
		}
		return false;
	}

	function utl_calc(utl){
	const full_val = 70;
	// if(utl>full_val){
	// 	utl = full_val
	// }
	return ((utl/full_val) * 100).toFixed(0)

	}
}