
function createDiv(width, height, text) {
let d = document.createElement('div');
d.style.width=width+ "px";
d.style.height = height+ "px";
d.style.border = "3px solid black";
    d.style.display = "inline-block";   
    d.style.margin = "10px";
    d.innerHTML = text;
    d.style.backgroundColor = "yellow";
    d.style.color = "red";
    d.style.textAlign= "center";
    document.getElementById('container').appendChild(d);
}
document.querySelector("button").addEventListener("click", () => {
    createDiv(100, 100, "New Div");
});

// Do not change this code
window.createDiv = createDiv;