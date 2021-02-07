// =================== back to top button =======================
//Get the button:
var b2top = document.getElementById("b2top");
var navbar = document.getElementsByClassName("header-section")[0];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    b2top.style.display = "block";
  } else {
    b2top.style.display = "none";
  }
  if (
    document.body.scrollTop > 60 ||
    document.documentElement.scrollTop > 150
  ) {
    navbar.style.position = "fixed";
    navbar.style.top = "-160px";
    if (window.innerWidth <= 600) {
      navbar.style.top = "-90px";
    }
  } else {
    navbar.style.position = "relative";
    navbar.style.top = "0px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
