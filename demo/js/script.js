         function setZScore() {
         	var spec = document.getElementById('Species').value;
         	var el1 = document.getElementById('CellType').value;
         	var el2 = document.getElementById('Direction').value;
         	var img = document.getElementById('img1');
         	var p = "https://storage.googleapis.com/alsbootstrap/zsore/" + spec+ "%20" + el1 + "%20"+ el2 +".svg";
         	img.src = p;
             return p;
         }
         function setBootstrap(){
         	var el1raw = document.getElementById('CellType').value;
         	var el1;
         	switch (el1raw) {
             case "VLMC":
                 el1 = "Vascular and Leptomeningeal Cells";
                 break;
             case "vSMC":
                 el1 = "Vascular Smooth Muscle Cell";
                 break;
             case "Endothelial":
                 el1 = "Vascular Endothelial";
                 break;
             case "OPC":
                 el1 = "Oligodendrocyte Precursor";
                 break;
         	default:
         		el1 = el1raw;
         }
         	var elt = document.getElementById('Direction');
             var el2 =  elt.options[elt.selectedIndex].text;
         	var el3 = document.getElementById('Timepoint').value;
         	var spec = document.getElementById('Species').value;
         	var img = document.getElementById('img2');
         	var p = (spec == 'Human') ? "https://storage.googleapis.com/alsbootstrap/bootDists_LOG_thresh250__dir" + el2 + "___Human ALS Spinal" + "____" + el1  + ".png"
         	: "https://storage.googleapis.com/alsbootstrap/bootDists_LOG_thresh250__dir" + el2 + "___" + el3 + "days_" + 'MOUSE' + "____" + el1  + ".png" ;
         	img.src = p;
             return p;
         }
		 
		 function setGene(){
			var img = document.getElementById('imgGene');
         	var p = "https://storage.googleapis.com/alscell/" + document.getElementById('gene').value.toLowerCase() + '.png';
         	img.src = p;
             return p;
		 }
		 function getGeneNames() {
			var geneOption;
			const url = "https://raw.githubusercontent.com/trusohamn/Rmd-files/master/geneNames.json";
			//window.alert('url given');
			$.getJSON(url, function(data) {
			//window.alert('in function');
				$(data).each(function() {
					geneOption = "<option value=\"" + this + "\">";
					$('#json-datalist').append(geneOption);
				});
			});
		};
         
         $(document).ready(function () {	
             $("#Species").change(function () {
                 var val = $(this).val();
                 if (val == "SOD1") {
                     $("#Timepoint").html("<option selected value = '28' >28 days</option><option value = '42'>42 days</option><option value = '56'>56 days</option>	<option value = '70'>70 days</option><option value = '98' >98 days</option><option value = '112'  >112 days</option><option value = '126' >126 days</option>");
                 } else if (val == "Human") {
                     $("#Timepoint").html("<option disabled selected  value='' >postmortem</option>");
                 } 
             });
			 
        	
         	
         	$("#Species").change();
         	setZScore();
         	setBootstrap();
			setGene();
			getGeneNames();

	})