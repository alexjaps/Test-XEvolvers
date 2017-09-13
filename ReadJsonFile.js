
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

/* I have some problem to read the json file beacause cross origin warning 
but the json reading is working with the function JsonData just feed it with a JSON Object
*/
function ReadJsonFile(){
	//var obj = readTextFile("file:///C:/Users/Alejandro/Desktop/jsonfile.json"); // Here you can use the function readTextFile
	 var obj = '{"Paulina":{"dob": 1815,"children":{"Juan":{"dob": 1850, "children":{ "Mathew":{"dob":1867} } },"Karina":{"dob":1840} } },"Brandon":{     "dob": 1820   },   "Raul": {     "dob": 1825,     "children": {       "Pedro": {         "dob": 1861       }     }   } }';
	if(!obj){
		obj = '{"Paulina":{"dob": 1815,"children":{"Juan":{"dob": 1850, "children":{ "Mathew":{"dob":1867} } },"Karina":{"dob":1840} } },"Brandon":{     "dob": 1820   },   "Raul": {     "dob": 1825,     "children": {       "Pedro": {         "dob": 1861       }     }   } }';
	}
	var JSONParse = JSON.parse(obj);
	return JsonData(JSONParse);
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

	//YearArray = YearArray.sort(function(a, b){return a-b}); //####### This method was Replaced  ############
    var objData = {};
    var sortArray = [];
    var increment = YearArray.length / 2;
    while (increment > 0) {
        for (i = increment; i < YearArray.length; i++) {
            var j = i;
            var temp = YearArray[i];
            while (j >= increment && YearArray[j-increment] > temp) {
                YearArray[j] = YearArray[j-increment];
                j = j - increment;
            }
            YearArray[j] = temp;
        }
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    for(x in YearArray){ if(YearArray[x]!= undefined){ sortArray.push(YearArray[x]); } }
    
    return [NamesArray,YearArray[0],YearArray[YearArray.length-1]];
	
}
/* The method return all values and here just read each one */
var data = ReadJsonFile();
console.log("Names:" + data[0] + "  Oldest: "+data[1] + "   Recent: "+data[2] );
