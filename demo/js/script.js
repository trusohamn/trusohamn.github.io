function setZScore() {
  const spec = document.getElementById("Species").value;
  const el1 = document.getElementById("CellType").value;
  const el2 = document.getElementById("Direction").value;
  const img = document.getElementById("img1");
  const p = `https://storage.googleapis.com/alsbootstrap/zsore/${spec}%20${el1}%20${el2}.svg`;
  img.src = p;
  return p;
}
function setBootstrap() {
  const el1raw = document.getElementById("CellType").value;
  let el1;
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
  const elt = document.getElementById("Direction");
  const el2 = elt.options[elt.selectedIndex].text;
  const el3 = document.getElementById("Timepoint").value;
  const spec = document.getElementById("Species").value;
  const img = document.getElementById("img2");
  const p =
    spec == "Human"
      ? `https://storage.googleapis.com/alsbootstrap/bootDists_LOG_thresh250__dir${el2}___Human ALS Spinal____${el1}.png`
      : `https://storage.googleapis.com/alsbootstrap/bootDists_LOG_thresh250__dir${el2}___${el3}days_MOUSE____${el1}.png`;
  img.src = p;
  return p;
}

function setGene(e) {
  e && e.preventDefault();
  const img = document.getElementById("imgGene");
  const geneName = document.getElementById("gene").value.toLowerCase();
  const p = `https://storage.googleapis.com/alscell/${geneName}.png`;
  img.src = p;
  return p;
}

function getGeneNames() {
  const dataList = document.querySelector("#json-datalist");
  let geneOptions = "";
  const url =  "https://raw.githubusercontent.com/trusohamn/trusohamn.github.io/master/demo/data/geneNames.json";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.forEach(gene => {
        geneOptions += `<option value="${gene}">`;
      });
      dataList.innerHTML = geneOptions;
    });
}

window.onload = () => {
  const species = document.querySelector("#Species");

  const changeHandler = () => {
    const timepoint = document.querySelector("#Timepoint");

    timepoint.innerHTML =
      species.value === "Human"
        ? "<option disabled selected  value='' >postmortem</option>"
        : "<option selected value = '28' >28 days</option><option value = '42'>42 days</option><option value = '56'>56 days</option>	<option value = '70'>70 days</option><option value = '98' >98 days</option><option value = '112'  >112 days</option><option value = '126' >126 days</option>";
  };
  species.addEventListener("change", changeHandler);

  changeHandler();
  setZScore();
  setBootstrap();
  setGene();
  getGeneNames();
};
