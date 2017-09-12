
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.send(null);
}

/* I have some problem to read the json file beause cross origin warning 
but the json reading is working with the function JsonData just feed it with a JSON Object
*/
function ReadJsonFile(){
	//var obj = readTextFile("file:///C:/Users/Alejandro/Desktop/jsonfile.json"); // Here you can use the function readTextFile
	 var obj = '{"Paulina":{"dob": 1815,"children":{"Juan":{"dob": 1850, "children":{ "Mathew":{"dob":1867} } },"Karina":{"dob":1840} } },"Brandon":{     "dob": 1820   },   "Raul": {     "dob": 1825,     "children": {       "Pedro": {         "dob": 1861       }     }   } }';
	if(!obj){
		obj = '{"Paulina":{"dob": 1815,"children":{"Juan":{"dob": 1850, "children":{ "Mathew":{"dob":1867} } },"Karina":{"dob":1840} } },"Brandon":{     "dob": 1820   },   "Raul": {     "dob": 1825,     "children": {       "Pedro": {         "dob": 1861       }     }   } }';
	}
	var JSONParse = JSON.parse(obj);
	JsonData(JSONParse);
}


function JsonData(JsonParse){

	var YearArray = [];
	var NamesArray = [];
	var JsonArray = [];
	function getDataFromJson(ObjJson)
	{
		if(ObjJson != undefined){
			for (x in ObjJson) {
				NamesArray.push(x);
				JsonArray.push(ObjJson[x].children)
				YearArray.push(ObjJson[x].dob)
				getDataFromJson(ObjJson[x].children);
			}
		}
		
	}
	getDataFromJson(JsonParse);

	YearArray = YearArray.sort(function(a, b){return a-b});
	console.log("Names :");
	for (x in NamesArray) {
		console.log(NamesArray[x]);
	}

	console.log("Oldest: " + YearArray[0] + " Recent: "+YearArray[YearArray.length-1]);
}


ReadJsonFile();
// getData();