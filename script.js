// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "22px 10px";
    document.getElementById("navbar").style.background = '#F0ECE6';
    document.getElementById("navbar").style.boxShadow = "0 0 5px #585858";
    document.getElementById("title").style.fontSize = "1.5rem";
    //document.getElementById("title").style.color = "black";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar").style.background = 'transparent';
    document.getElementById("title").style.fontSize = "2.25rem";
    //document.getElementById("title").style.color = "#ffffff";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

