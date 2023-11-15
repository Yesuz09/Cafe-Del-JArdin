// src/scrollFunctions.js
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").style.top = "-50px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
  }
  
  export default scrollFunction;
  