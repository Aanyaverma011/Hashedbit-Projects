let text = document.getElementById("text-container");


document.getElementById("colorchange").addEventListener("click", () => {
    let color = document.getElementById("colorbox").value;
    text.style.color = color;
});


document.getElementById("fontsize").addEventListener("input", (e) => {
    text.style.fontSize = e.target.value + "px";
});


document.getElementById("italic").addEventListener("click", () => {
    text.style.fontStyle = 
        text.style.fontStyle === "italic" ? "normal" : "italic";
});


document.getElementById("underline").addEventListener("click", () => {
    text.style.textDecoration = 
        text.style.textDecoration === "underline" ? "none" : "underline";
});


document.getElementById("bold").addEventListener("click", () => {
    text.style.fontWeight = 
        text.style.fontWeight === "bold" ? "normal" : "bold";
});


document.getElementById("list").addEventListener("change", (e) => {
    text.style.fontFamily = e.target.value;
});


document.getElementById("getstyle").addEventListener("click", () => {
    let styles = `
color: ${text.style.color || "black"};
font-size: ${text.style.fontSize || "55px"};
font-family: ${text.style.fontFamily || "sans-serif"};
text-decoration: ${text.style.textDecoration || "none"};
font-style: ${text.style.fontStyle || "normal"};
font-weight: ${text.style.fontWeight || "normal"};
    `;

    document.getElementById("css-props").textContent = styles;
});