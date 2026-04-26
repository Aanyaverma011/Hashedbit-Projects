function toggleVisibility() {
      let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";  // show
    } else {
        para.style.display = "none";   // hide
    }
}