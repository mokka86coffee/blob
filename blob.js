function download(json, filename){
  var blob = new Blob([JSON.stringify(json)], {type: "application/json"});
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
