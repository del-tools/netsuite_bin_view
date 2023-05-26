//Initialize variables
const lowutl = 60;
var volumearray = {}


/**
 * Retrieves and processes data from CSV, organizes it into bin groups, and returns the output as an array of objects.
 *
 * @returns {Array} - The output array containing organized bin group data.
 */
function getdata() {
	let outarray = []; // Initialize an empty array to store the output data
	let jsondata = csvJSON(CSV); // Convert CSV data to JSON format

	//for each loop to run for every bin-item
	jsondata.forEach(function(bin) {
		// console.log(bin["Bin-Items"].replaceAll("/",","))
		// var items = JSON.parse(bin["Bin-Items"].replaceAll("/",",").replaceAll(/""/g, '"').replace(/^"(.*)"$/, '$1'))
		var items = JSON.parse(bin["Bin-Items"].replaceAll("/",",")); // Parse the "Bin-Items" string as JSON and store it in the 'items' variable
		// console.log(items)
		var isnewbin = true; // Flag to check if the bin group is new or already exists in the output array
		var newBinsArray = [];
		var i = 0;
		outarray.forEach(function(arrayvalue) {

			if (arrayvalue.bingroup === bin["BinGroup"]) {
				// If the bin group already exists in the output array, add the new bin to the existing group
				var newBin = {
					"bay-number": bin["bay-number"],
					"BinType": bin["BinType"],
					"BinLvl": bin["BinLvl"],
					"BinTypeShort": shortbins(bin["BinType"]).name,
					"BinTypeModifier": shortbins(bin["BinType"]).UTL_mod,
					"palletbin": shortbins(bin["BinType"]).palletbin,
					"picking-bin": bin["picking-bin"],
					"bin-width": bin["bin-width"],
					"bin-height": bin["bin-height"],
					"bin-pallets": bin["bin-pallets"],
					"Bin-Items":items
				}
				outarray[i].bins.push(newBin);
				isnewbin = false;
			}
			i++
		});

		if (isnewbin === true) {
			// If the bin group is new, create a new entry in the output array for the bin group
			outarray.push({
				"bingroup": bin["BinGroup"],
				"bins": [{
					"bay-number": bin["bay-number"],
					"BinType": bin["BinType"],
					"BinLvl": bin["BinLvl"],
					"BinTypeShort": shortbins(bin["BinType"]).name,
					"BinTypeModifier": shortbins(bin["BinType"]).UTL_mod,
					"palletbin": shortbins(bin["BinType"]).palletbin,
					"picking-bin": bin["picking-bin"],
					"bin-width": bin["bin-width"],
					"bin-height": bin["bin-height"],
					"bin-pallets": bin["bin-pallets"],
					"Bin-Items":items
				}]
			});
		}
	});

	return outarray; // Return the final output array
}

// Variable for chart to show reports
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


/**
 * Returns a short representation and additional information for a given bin type.
 *
 * @param {string} bintype - The bin type to retrieve short representation and information for.
 * @returns {Object} - An object containing the short representation, UTL modifier, and pallet bin information.
 */
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

/*function shortreqbins(binType_req) {
	switch (binType_req) {
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
}*/

/**
 * Converts a CSV string to a JSON array of objects.
 *
 * @param {string} csv - The CSV string to convert.
 * @returns {Array} - The JSON array of objects representing the CSV data.
 */
function csvJSON(csv) {

	var lines = csv.split("\n"); // Split CSV data when line ends

	var result = []; // To store results

	var headers = lines[0].split(","); // Split first line of CSV by "," to get headers

	// Loop to process each line of the CSV data
	for (var i = 1; i < lines.length; i++) {

		// Object to store data for current line
		var obj = {};
		// Split current line by "," to get values
		var currentline = lines[i].split(",");

		// Assign values to object properties using headers as keys
		for (var j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j];
		}

		result.push(obj); // Push the object into the result array

	}

	//return result; //JavaScript object
	return result; // Return the result array as JSON
}


var jsonData = getdata();

console.log(jsonData)

/**
 * The onload function is executed when the page is loaded and initializes various variables.
 * It retrieves and assigns the JSON data to the 'data' variable.
 * Several variables are initialized to track total bin volume and total item volume.
 * Dialog elements, including content, title, and close button, are obtained by their respective IDs.
 * The function performs calculations and manipulations on the data to set up the visual representation of the warehouse.
 */
onload = function(currentfilters) {

	//Initializes variables
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

	// Get the base and footer div elements by their respective IDs
	const baseDiv = document.getElementById("root");
	const footerDiv = document.getElementById("footer");
	// Assign jsonData to the data variable
	const data = jsonData
	// Initialize variables to track total bin volume and total item volume
	var totalbinvolume_all = 0
	var totalItemvolume_all = 0
	// Get the dialog element and its content, title, and close button by their respective IDs
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
		let number = data[j].bingroup.slice(-2); // Get the last two characters of the bingroup string
		var aislename = data[j].bingroup.substring(0, 1); // Get the first character of the bingroup string
		if (aisle != aislename) {
			// Reset the available and used space for each bin type in the volumearray object
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

			// Reset totalbinaval and totalitmused
			totalbinaval = 0;
			totalitmused = 0;
			asile_count++; // Increment the aisle count
			aisle = data[j].bingroup.substring(0, 1); // Update the aisle variable with the new aisle name
			// Create new elements for the odd and even rows, and the aisle container
			odd = document.createElement("div");
			even = document.createElement("div");
			const aisleDiv = document.createElement("div");

			// Add classes and IDs to the aisleDiv and rows
			aisleDiv.classList.add("aisle",);
			aisleDiv.id= "aisle-"+aislename
			baseDiv.appendChild(aisleDiv);
			odd.classList.add("odd");
			even.classList.add("even");
			aisleDiv.appendChild(odd);
			aisleDiv.appendChild(even);

			// Create elements for displaying aisle UTL and workstation UTL
			asileUtl = document.createElement("div");
			wsUtl = document.createElement("div");

			asileUtl.setAttribute('id', 'asileUtl');
			wsUtl.setAttribute('id', 'wsUtl');

		}
		////console.log(volumearray)

		asileUtl.innerHTML = `<p><span class="fs-15">Asile Utilization <span>${data[j].bingroup.substring(0, 1)}</span></span>:<span></span></p>`;

		const bay = document.createElement("div");
		bay.classList.add("bay");
		var isOdd = false; // Initialize a variable to track if the bay is odd or even
		var calc_number = number % 2; // Calculate the modulo of the number to determine if it's odd or even
		if (calc_number !== 0) {
			isOdd = true; // Set isOdd to true if the calculated number is not equal to 0
		}

		if(isOdd){
			// If the bay is odd, append it to the odd row
			odd.appendChild(bay);
			const binGroup = document.createElement("div");
			binGroup.classList.add("bin-group");
			binGroup.textContent = data[j].bingroup;
			bay.appendChild(binGroup);
		}else{
			// If the bay is even, append it to the even row
			const binGroup = document.createElement("div");
			binGroup.classList.add("bin-group");
			binGroup.textContent = data[j].bingroup;
			bay.appendChild(binGroup);
			even.appendChild(bay);
		}

		const binGroup_bins = document.createElement("div");
		binGroup_bins.classList.add("binGroup_bins")
		for (let i = 0; i < data[j].bins.length; i++) {
			const ailseData = data[j].bins[i]; // Retrieve the data for the current aisle and bin
			var csspicking = "non-picking-bin"; // Initialize the CSS class for the picking bin status
			if(ailseData["picking-bin"] == 'true'){
				csspicking = "picking-bin"; // Set the CSS class to "picking-bin" if it is a picking bin
			}

			var binsequence = ailseData["bay-number"].slice(-1); // Extract the bin sequence from the bay number
			const binTypeShort = document.createElement("div");
			binTypeShort.dataset.itemcount = ailseData["Bin-Items"].length; // Set the dataset itemcount to the number of items in the bin
			binTypeShort.dataset.bin = ailseData["bay-number"]; // Set the dataset bin to the bay number
			// console.log(data[j].bins[i])
			binTypeShort.dataset.BinLvl = data[j].bins[i].BinLvl; // Set the dataset BinLvl to the bin level
			//console.log(binTypeShort.dataset.bin + " = " + data[j].bins[i].BinLvl)
			binTypeShort.dataset.BinType = data[j].bins[i].BinType; // Set the dataset BinType to the bin type
			var utl_used = 0; // Initialize the used space variable
			var flag_items = false; // Flag to track if there are items in the bin
			var flag_bin = false; // Flag to track if the bin is used

			var utl_avl = 0; // Initialize the available space variable

			//Asile D and M has 60cm depth and rest has 90cm
			if(data[j].bingroup.substring(0, 1) === "D" || data[j].bingroup.substring(0, 1) === "M"){

				utl_avl = ailseData["bin-width"] * ailseData["bin-height"]*60; // Calculate the available space for "D" or "M" bin groups

			} else {

				utl_avl = ailseData["bin-width"] * ailseData["bin-height"]*90; // Calculate the available space for other bin groups
			}
			////console.log(ailseData["BinTypeModifier"])


			if(ailseData["BinTypeModifier"] > 0){
				utl_avl = utl_avl * (1-ailseData["BinTypeModifier"]); // Adjust the available space based on the BinTypeModifier value
			}
			if(ailseData["bin-pallets"]){
				var palletPercent = 1/ailseData["bin-pallets"]; // Calculate the percentage of the bin occupied by each pallet
			}else{
				ailseData["palletbin"] = false; // Set the palletbin flag to false if the bin does not have a specified number of pallets
			}



			for(var z=0;z < ailseData["Bin-Items"].length;z++){
				var tempitem_utl = 0
				if(!isEmpty(ailseData["Bin-Items"][z].depth)||!isEmpty(ailseData["Bin-Items"][z].height)||!isEmpty(ailseData["Bin-Items"][z].width)){
					tempitem_utl = (ailseData["Bin-Items"][z].depth * ailseData["Bin-Items"][z].height * ailseData["Bin-Items"][z].width) * ailseData["Bin-Items"][z].qty;
				}

				if(tempitem_utl == 0){
					binTypeShort.classList.add("flag_itm_vol","FLAG", "col-red"); // Add CSS classes to indicate zero item volume error
				}



				var hasBinLevelError = false;
				var hasBinTypeError = false;

				// for loop to check if there are bin level and bin type is not equal to required bin type and bin level
				for (let f = 0; f < ailseData["Bin-Items"].length; f++) {
					if (ailseData["Bin-Items"][f]["binlvl_req"] !== "- None -" && ailseData["Bin-Items"][f]["binlvl_req"] !== ailseData["BinLvl"]) {
						hasBinLevelError = true; // Check if there are bin level errors
					}
					if (ailseData["Bin-Items"][f]["binType_req"] !== "- None -" && ailseData["Bin-Items"][f]["binType_req"] !== ailseData["BinType"]) {
						hasBinTypeError = true; // Check if there are bin type errors
					}
				}

				// Check if there are bin level errors or bin type errors
				if(hasBinLevelError || hasBinTypeError){
					if (hasBinLevelError) {
						binTypeShort.classList.add("flag_bin_level", "FLAG", "col-red"); // Add CSS class to indicate bin level error
					}

					if (hasBinTypeError) {
						binTypeShort.classList.add("flag_bin_type", "FLAG", "col-red"); // Add CSS class to indicate bin type error
					}
					binTypeShort.classList.add("flag_bin_type_lvl", "FLAG", "col-red"); // Add CSS class to indicate both bin type and level errors
				}

				// Check if the aisle data has the "palletbin" property
				if(ailseData["palletbin"]){
					// Calculate the utilization percentage for pallet bins
					ailseData["Bin-Items"][z].itemutl = (palletPercent*100).toFixed(0)
					try {
						// Update the used space in the volumearray for the corresponding bin type
						volumearray[ailseData["BinTypeShort"]]["Used Space"] += parseInt(palletPercent * utl_avl);
						// Update the used space in the volumearrayall for the corresponding bin type
						volumearrayall[ailseData["BinTypeShort"]]["Used Space"] += parseInt(palletPercent * utl_avl);
					}catch (e){
						// Handle any errors
					}
				}else{
					// Calculate the utilization percentage for non-pallet bins
					ailseData["Bin-Items"][z].itemutl = ((tempitem_utl/utl_avl)*100).toFixed(0)
					try {
						// Update the used space in the volumearray for the corresponding bin type
						volumearray[ailseData["BinTypeShort"]]["Used Space"] += parseInt(tempitem_utl);
						// Update the used space in the volumearrayall for the corresponding bin type
						volumearrayall[ailseData["BinTypeShort"]]["Used Space"] += parseInt(tempitem_utl);
						// Additional code specific to "S-R" bin type can be added here
						if(ailseData["BinTypeShort"] == "S-R"){
						}
					}catch (e){
					}
				}
				utl_used = utl_used + tempitem_utl; // Calculate the total used space
			}
			if(ailseData["palletbin"]){

				binTypeShort.dataset.utl = ((palletPercent*binTypeShort.dataset.itemcount)*100).toFixed(0); // Calculate utilization percentage for pallet bins
			}else{
				binTypeShort.dataset.utl = ((utl_used/utl_avl)*100).toFixed(0); // Calculate utilization percentage for non-pallet bins
			}
			try{
				volumearray[ailseData["BinTypeShort"]]["Available Space"] += parseInt(utl_avl); // Update available space in the volumearray
				volumearrayall[ailseData["BinTypeShort"]]["Available Space"] += parseInt(utl_avl); // Update available space in the volumearrayall
			}catch (e) {
				////console.log("volumearray Error")
			}

			////console.log(volumearray)
			binTypeShort.dataset.items = JSON.stringify(ailseData["Bin-Items"]);
			if(isEmpty(ailseData["bin-width"])||isEmpty(ailseData["bin-height"]) || ailseData["BinTypeShort"] === 'GO' || ailseData["BinTypeShort"] === 'GI'){
				binTypeShort.classList.add("flag_bin_vol"); // Add CSS class to indicate missing bin width or height for certain bin types
			} else if(isEmpty(ailseData["bin-width"])||isEmpty(ailseData["bin-height"])) {
				binTypeShort.classList.add("flag_bin_vol","FLAG","col-red"); // Add CSS class to indicate missing bin width or height
			}

			// binTypeShort.dataset.utl = ((utl_used / utl_avl) * 100).toFixed(0);

			binTypeShort.dataset.pallets = ailseData["bin-pallets"];

			if (binTypeShort.dataset.utl<lowutl){
				binTypeShort.classList.add("utl_low"); // Add CSS class to indicate low utilization
			}
			if(binTypeShort.dataset.utl >100){
				binTypeShort.classList.add("utl_over"); // Add CSS class to indicate over-utilization
			}

			if(binTypeShort.dataset.itemcount < 1){
				binTypeShort.dataset.utl = 0;
				binTypeShort.classList.add("utl_free"); // Add CSS class to indicate free bin
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
					binTypeShort.dataset.bin = ailseData["bay-number"]; // Add bin number to the dataset attribute
				}
				binTypeShort.classList.add("clickable"); // Add CSS class to make the bin clickable
				binTypeShort.dataset.utlvol = utl_avl; // Add available space to the dataset attribute
				binTypeShort.addEventListener("click", function(e){
				e.stopPropagation(); // Prevents the event from bubbling up to the window
					var bin_number = this.dataset.bin; // Retrieve bin number from the dataset attribute
					var items = JSON.parse(this.dataset.items); // Parse the JSON string to retrieve the items
					var htmloutput = ""
					// if(this.classList.contains("flag_sku")){
					// 	htmloutput = `<div class = "error">This bin has ${binTypeShort.dataset.itemcount} pallets, bin can only hold ${binTypeShort.dataset.pallets}</div>`
					// }
					// if(this.classList.contains("flag_bin_vol")){
					// 	htmloutput = `<div class = "error">This bin has is missing volumetric data (Height = "${ailseData["bin-width"]}" & Length = "${ailseData["bin-height"]}")</div>`
					// }
					// if(this.classList.contains("flag_itm_vol")){
					// 	htmloutput = `<div class = "error">This bin has items which are missing volumetric data</div>`
					// }
					// if(this.classList.contains("both_errors")){
					// 	htmloutput = `<div class = "error">This bin has mismatched bin types and bin levels</div>`
					// }
					// if(this.classList.contains("flag_bin_level")){
					// 	htmloutput = `<div class = "error">This bin has mismatched bin levels</div>`
					// }
					// if(this.classList.contains("flag_bin_type")){
					// 	htmloutput = `<div class = "error">This bin has mismatched bin types</div>`
					// }
					var errorMessages = [];

					// Check for different error conditions and add corresponding error messages
					if (this.classList.contains("flag_itm_vol")) {
						errorMessages.push(`<div class="error"><span class="error-symbol">&#x2696;</span> This bin has items which are missing volumetric data</div>`);
					}

					if (this.classList.contains("flag_sku")) {
						errorMessages.push(`<div class="error"><span class="error-symbol">&#x21AF;</span> This bin has ${binTypeShort.dataset.itemcount} pallets, but can only hold ${binTypeShort.dataset.pallets}</div>`);
					}

					if (this.classList.contains("flag_bin_vol")) {
						errorMessages.push(`<div class="error">This bin is missing volumetric data (Height = "${ailseData["bin-width"]}" & Length = "${ailseData["bin-height"]}")</div>`);
					}

					if (this.classList.contains("both_errors")) {
						errorMessages.push(`<div class="error">This bin has mismatched bin types and bin levels</div>`);
					}

					if (this.classList.contains("flag_bin_level")) {
						errorMessages.push(`<div class="error"><span class="error-symbol">&#x2279;</span> This bin has mismatched bin levels </div>`);
					}

					if (this.classList.contains("flag_bin_type")) {
						errorMessages.push(`<div class="error"><span class="error-symbol">&#x2247;</span> This bin has mismatched bin types </div>`);
					}

					htmloutput = errorMessages.join("");

					htmloutput = htmloutput + "<table class='table-css'><tr><th>Item</th><th>MPN</th><th>Description</th><th>Quantity On Hand</th><th>UTL</th><th class = 'extrainfo'>Width</th><th class = 'extrainfo'>Height</th><th class = 'extrainfo'>Depth</th><th class = 'extrainfo'>Bin Type Require</th><th class = 'extrainfo'>Bin Level Required</th><th>Errors List</th></tr>"

					// Add the errors in each item and shows them in html page
					items.forEach(function(item){
						var errorsymbols= [];
						var highlight_row = "";
						var hasErrors = false;
						var hasbinlvlerror = false;
						var hasbintypeerror = false;

						// console.log(items);
						//check for the missing volumetric data
						if(isEmpty(item.width) || isEmpty(item.height) || isEmpty(item.depth)){
							highlight_row = " rowhighlight";
							hasErrors = true;
							errorsymbols.push('<span class="error-msg-title" title="&#x2696;This bin has items which are missing volumetric data">&#x2696;</span>');
							console.log(errorsymbols)
						}

						// for loop to check if there are bin level and bin type is not equal to required bin type and bin level
						for (let g = 0; g < ailseData["Bin-Items"].length; g++) {
							if (ailseData["Bin-Items"][g]["binlvl_req"] !== "- None -" && ailseData["Bin-Items"][g]["binlvl_req"] !== ailseData["BinLvl"]) {
								highlight_row = " rowhighlight";
								hasErrors = true;
								hasbinlvlerror = true;
							}
							if (ailseData["Bin-Items"][g]["binType_req"] !== "- None -" && ailseData["Bin-Items"][g]["binType_req"] !== ailseData["BinType"]) {
								highlight_row = " rowhighlight";
								hasErrors = true;
								hasbintypeerror = true;
							}
						}

						// Add mismatched bin error in the every item whcih has this error and shows them in HTML page
						if(hasbinlvlerror){
							errorsymbols.push('<span class="error-msg-title" title="&#x2279; This bin has mismatched bin levels">&#x2279;</span>');
						}
						if(hasbintypeerror){
							errorsymbols.push('<span class="error-msg-title" title="&#x2247; This bin has mismatched bin types">&#x2247;</span>');
						}

						//Adds to many sku error in the every item whcih has this error and shows them in HTML page
						if(binTypeShort.dataset.itemcount > binTypeShort.dataset.pallets && ["P-OS","B-HH","B-FH","B-TH","P-FH","P-HH","","","","",""].indexOf(ailseData.BinTypeShort) > -1){
							highlight_row = " rowhighlight";
							hasErrors = true;
							errorsymbols.push('<span class="error-msg-title" title="&#x21AF; This bin has ' + binTypeShort.dataset.itemcount + ' pallets, but can only hold ' + binTypeShort.dataset.pallets + '">&#x21AF;</span>');
							console.log(errorsymbols)
						}
						// console.log(errorsymbols)
						htmloutput += `<tr${hasErrors ? " class='" + highlight_row + "'" : ""}><td>${item.item}</td><td>${item.mpn}</td><td>${item.desc}</td><td>${item.qty}</td><td>${item.itemutl + "%"}</td><td class='extrainfo'>${item.width}</td><td class='extrainfo'>${item.height}</td><td class='extrainfo'>${item.depth}</td><td class='extrainfo'>${item.binType_req}</td><td class='extrainfo'>${item.binlvl_req}</td><td class="error-symbol">${errorsymbols}</td></tr>`;
					})

					htmloutput = htmloutput + `</table>
					<button class="button" id = "viewmore" onclick="document.querySelectorAll('.extrainfo').forEach(element => {element.style.display = 'table-cell';});">View Extra Detail</button>`;

					// console.log(binTypeShort.dataset)
					dialog_title.innerHTML=  `${bin_number} [${ailseData.BinTypeShort}] - ${binTypeShort.dataset.utlvol}</br><p class="bulklvl-bulktype-title">Bin Level: ${binTypeShort.dataset.BinLvl}</p><p class="bulklvl-bulktype-title">Bin Type: ${binTypeShort.dataset.BinType}</p>`;
					dialog_content.innerHTML = htmloutput;

					dialog.show();
					// ////console.log(`Width ${items[1]}`);
				}, false);
			}
			// Add CSS classes to binTypeShort based on the value of ailseData.BinTypeShort
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

		// Check if the current item is the last item or belongs to a different aisle
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
			// Create a div element for aisle report
			var utltest = document.createElement("div");
			utltest.classList.add("asilereport");
			// Calculate total bin volume and total item volume
			totalbinvolume_all += totalbinaval
			totalItemvolume_all += totalitmused

			// Create a canvas element for the chart
			var chartnode = document.createElement("canvas");
			chartnode.id = "chart-"+data[j].bingroup.substring(0, 1);
			chartnode.classList.add("aisle_report_canvas")
			utltest.appendChild(chartnode)

			// Get the aisle div by ID
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

			// Configure the chart
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
						// Handle the click event on the chart
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
									// Customize the tooltip footer based on the dataset index
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
			// Create the chart
			const chart =new Chart(ctx,config);
		}
	}
	// console.log(volumearrayall)

	// Create a canvas element for the chart
	var chartnode = document.createElement("canvas");
	chartnode.id = "chart-All";
	//chartnode.classList.add("aisle_report_canvas")
	const report_dialog = document.getElementById("mainreport");

	// Create a div element to hold the chart data
	const chartdatanode = document.createElement("div");
	chartdatanode.classList.add("reportOverview");
	//chartdatanode.innerHTML = "<h1>test</h1>"
	//report_dialog.appendChild(chartdatanode)
	report_dialog.appendChild(chartnode)

	// Get the canvas element by ID
	const ctx = document.getElementById("chart-All");
	// Initialize arrays for labels, data, and colors
	var labels = []
	var objData = []
	var allcolors = {
		background:[],
		border:[]
	}
	// Add the "ALL" label to the labels array
	labels.push("ALL");

	// Initialize variables for total available and total used space
	var totalavailable = 0
	var totalused = 0;

	// Iterate through the volume array for all types
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

	// Add the "ALL" data to the data array
	allcolors.background.push(chartColors.background["All"])
	allcolors.border.push(chartColors.border["All"])
	objData.push({
		type:"ALL",
		utl:totalused/totalavailable,
		used:totalused,
		available:totalavailable,
	})

	// Configure the chart
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
							// Customize the tooltip footer based on the dataset index
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
	// Create the chart using the configured options
	const chart =new Chart(ctx,config);



	// Get elements with the class "aisle"
	var domAisles = document.getElementsByClassName("aisle");

	// Add click event listener to the main report button
	const mainreportbutton = document.getElementById("MainReport_Button");
	mainreportbutton.addEventListener("click", function(){
		const report_dialog = document.getElementById("mainreport");
		report_dialog.show();
	}, false);

	// Add click event listener to the main report close button
	const mainreportclosebutton = document.getElementById("close-dialog_report");

	mainreportclosebutton.addEventListener("click", function(){
		const report_dialog = document.getElementById("mainreport");
		report_dialog.close()
	}, false);

	// Loop through the aisle elements
	for(l=0;l<domAisles.length;l++){
		domAisles[l].children
		var oddaisle = domAisles[l].children[0]
		var evenaisle = domAisles[l].children[1]
		var oddbays = oddaisle.children.length
		var evenbays = evenaisle.children.length
		// Create a div element for the bay
		const bay = document.createElement("div");
		bay.classList.add("bay");
		// Add the bay to the odd aisle if it has no bays
		if(oddbays == 0){

			oddaisle.appendChild(bay)
		}
		// Add the bay to the even aisle if it has no bays
		if(evenbays == 0){
			evenaisle.appendChild(bay)
		}
	}

	// Update HTML content of wsUtl element
	wsUtl.innerHTML = `<p><span class="fs-15">Warehouse Utilization</span>:<span></span></p>`;
	// Set grid-template-columns style of baseDiv element
	baseDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`
	// Set grid-template-columns style of footerDiv element
	footerDiv.style = `grid-template-columns: repeat(${(asile_count+1)}, 1fr);`
	// Set initial value for current_view variable

	// footerDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`
	//baseDiv.style = `grid-template-columns: repeat(2, 1fr);gap: 100px 10px;`
	////console.log(asile_count+1);
var current_view = 0;

	// Add click event listener to changeview_button
	const changeview_button = document.getElementById("changeview");
	changeview_button.addEventListener("click", function(){
		// Toggle the grid-template-columns style based on the current_view value
		if(current_view == 0){
			baseDiv.style = `grid-template-columns: repeat(4, 1fr);gap: 100px 10px;`
			current_view = 1;
		}else{
			baseDiv.style = `grid-template-columns: repeat(${asile_count+1}, 1fr);`
			current_view = 0;
		}

	}, false);


	// Add click event listener to closeBtn
	closeBtn.addEventListener('click', () => {
		dialog.close();
	});
	// Get filter elements
	var filter_button = document.getElementById("update-Search");
	var filter_flag = document.getElementById("filter-flag");
	var filter_utl = document.getElementById("filter-utl");

	// Add click event listener to filter_button
	filter_button.addEventListener('click', () => {
		// Reset the currentfilters object
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

		// Get the selected values from filter_flag and filter_utl elements
		var filter_flag_text = filter_flag.options[filter_flag.selectedIndex].value;
		var filter_utl_text = filter_utl.options[filter_utl.selectedIndex].value;

		// Apply filters based on the selected values
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
			// case "flag_bin_type":
			// 	currentfilters.main.not.push(".flag_bin_type");
			// 	break;
			// case "flag_bin_level":
			// 	currentfilters.main.not.push(".flag_bin_level");
			// 	break;
			case "both_errors":
				currentfilters.main.not.push(".flag_bin_type_lvl");
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
		// Call the updatefilters function with the currentfilters object
		updatefilters(currentfilters);

	});

	// Add click event listener to dialog
	dialog.addEventListener('click', (e) => {
		e.stopPropagation(); // Prevents the event from bubbling up to the window
	});
	// Add click event listener to window
	window.addEventListener('click', (e) => {
			if (e.target !== dialog && !dialog.contains(e.target)) {
				dialog.close();
			}

	});

	//DRAG DIALOG BOX inventorydetail
	dragElementinventorydetail(document.getElementById("inventorydetail"));

	function dragElementinventorydetail(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById("inventorydetail")) {
			/* if present, the header is where you move the DIV from:*/
			document.getElementById("inventorydetail").onmousedown = dragMouseDown;
		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}
		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	//DRAG DIALOG BOX mainreport
	dragElementmainreport(document.getElementById("mainreport"));

	function dragElementmainreport(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById("mainreport")) {
			/* if present, the header is where you move the DIV from:*/
			document.getElementById("mainreport").onmousedown = dragMouseDown;
		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}
		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}


	// Function to update filters based on the provided filter array
	function updatefilters(filterarray){
		// Reset opacity for all bin elements
		var elements = document.querySelectorAll('.bin');
		elements.forEach(element => {
			element.style.opacity = 1;
		});
		// Build the filter string based on the filter array
		var filterstring = ".bin";
		// Append main.other filters to the filter string
		filterarray.main.other.forEach(function(filter){
			filterstring = filterstring + filter
		})
		// Append report.other filters to the filter string
		filterarray.report.other.forEach(function(filter){
			filterstring = filterstring + filter
		})
		// Append ":not()" to the filter string to negate main.not and report.not filters
		filterstring = filterstring + ":not(";
		// Append main.not filters to the filter string
		filterarray.main.not.forEach(function(filter){
			filterstring = filterstring + filter
		})

		// Append report.not filters to the filter string
		filterarray.report.not.forEach(function(filter){
			filterstring = filterstring + filter
		})
		// Close the ":not()" section of the filter string
		filterstring = filterstring + ")";

		// Remove ":not()" if it is empty
		filterstring = filterstring.replace(":not()","")
		// Apply opacity to elements matching the filter string
		if(filterstring != ".bin"){
			var elements = document.querySelectorAll(filterstring);
			elements.forEach(element => {
				element.style.opacity = 0.3;
			});
		}

	}
	// Function to check if a string is empty
	function isEmpty(strval){
		if(strval == "" || strval == " " || strval == null || strval == undefined){
			return true;
		}
		return false;
	}

	// Function to calculate utilization percentage
	function utl_calc(utl){
	const full_val = 70;
	// if(utl>full_val){
	// 	utl = full_val
	// }
	return ((utl/full_val) * 100).toFixed(0)

	}
}