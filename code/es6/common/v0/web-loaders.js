export function loadPNG(pngURL, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", pngURL, true);
    xhr.responseType = "blob";
    xhr.onload = function (event) {
        if (this.status == 200) {
            let blob = this.response;
            let img = document.createElement("img");
            img.onload = (event) => {
                window.URL.revokeObjectURL(img.src);
            };
            img.src = window.URL.createObjectURL(blob);
            callback(img);
        }
    };
    xhr.send();
}
export function loadJSON(jsonURL, callback) {
    loadWebResource(jsonURL, "GET", "application/json", (text) => callback(JSON.parse(text)));
}
function loadWebResource(url, method, mimeType, callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType(mimeType);
    xobj.open(method, url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send();
}
//# sourceMappingURL=web-loaders.js.map