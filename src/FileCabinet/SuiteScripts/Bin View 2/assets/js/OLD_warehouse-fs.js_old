function getdata() {

	let outarray = [];
	let jsondata = csvJSON(CSV);




	jsondata.forEach(function(bin) {

		var isnewbin = true;
		var newBinsArray = [];
		var i = 0;
		outarray.forEach(function(arrayvalue) {


			if (arrayvalue.bingroup === bin["BinGroup"]) {
				var newBin = {
					"bay-number": bin["bay-number"],
					"BinTypeShort": shortbins(bin["BinType"]),
					"picking-bin": bin["picking-bin"]
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
					"BinTypeShort": shortbins(bin["BinType"]),
					"picking-bin": bin["picking-bin"]
				}]
			});
		}
	});



	console.log(outarray)
	return outarray;
}

function shortbins(bintype) {
	switch (bintype) {
		case 'Pallet - Oversize':
			return 'P-OS'
			break;
		case 'Pallet - Half Height':
			return 'P-HH'
			break;
		case 'Bulk - Half Height':
			return 'B-HH'
			break;
		case 'Bulk - Full Height':
			return 'B-FH'
			break;
		case 'Bulk - Tiny Height':
			return 'B-TH'
			break;
		case 'Pallet - Full Height':
			return 'P-FH'
			break;
		case 'Goods Out Zone':
			return 'GO'
			break;
		case 'Shelf - Racking':
			return 'S-R'
			break;
		case 'Shelf - Low Bay':
			return 'S-L'
			break;
		case 'Goods In Zone':
			return 'GI'
			break;
		case 'Trolley':
			return 'TR'
			break;
		case 'Unknown':
			return 'UN'
			break;
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




onload = function() {
	const baseDiv = document.getElementById("root");


	const data = jsonData

	let a = 1;


	let odd;
	let even;

	let aisle = null;

	for (let j = 0; j < data.length; j++) {
		let number = data[j].bingroup.slice(-2);
		if (aisle != data[j].bingroup.substring(0, 1)) {
			aisle = data[j].bingroup.substring(0, 1);
			odd = document.createElement("div");
			odd.prepend("Aisle " + aisle + " [Odd]")
			even = document.createElement("div");
			even.prepend("Aisle " + aisle + " [Even]")
			const aisleDiv = document.createElement("div");

			aisleDiv.classList.add("aisle");
			aisleDiv.classList.add("Aisle-" + aisle);
			baseDiv.appendChild(aisleDiv);
			odd.classList.add("odd");
			even.classList.add("even");
			aisleDiv.appendChild(odd);
			aisleDiv.appendChild(even);
		}
		const bay = document.createElement("div");
		bay.classList.add("bay");
		var calc_number = number % 2
		if (calc_number === 0) {
			even.appendChild(bay);
		} else {
			odd.appendChild(bay);
		}
		const binGroup = document.createElement("div");
		binGroup.classList.add("bin-group");
		binGroup.textContent = data[j].bingroup;
		bay.appendChild(binGroup);

		for (let i = 0; i < data[j].bins.length; i++) {
			const ailseData = data[j].bins[i];
			// console.log(ailseData)
			if (data[j].bingroup === `A0${a}` && ailseData.BinTypeShort === "P-OS") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-pos");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
				a = a + 2;
			} else if (ailseData.BinTypeShort === "P-OS") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-pos");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "B-HH") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-b-hh");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "B-FH") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-b-fh");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "GO") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-go");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "GI") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-gi");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "P-FH") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-p-fh");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "P-HH") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-p-hh");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (ailseData.BinTypeShort === "S-R") {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin", "bintype-sr");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
			} else if (data[j].bingroup !== null) {
				const binTypeShort = document.createElement("div");
				binTypeShort.classList.add("bin");
				binTypeShort.textContent = ailseData["BinTypeShort"];
				bay.appendChild(binTypeShort);
				a = a + 1;

			}

		}
	}
}