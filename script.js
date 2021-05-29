// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "22px 10px";
    document.getElementById("navbar").style.background = '#708448';
    document.getElementById("navbar").style.boxShadow = "0 0 5px #585858";
    document.getElementById("title").style.fontSize = "1.5rem";
    
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("title").style.fontSize = "2.45rem";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

var refTagger = {
  settings: {
    bibleVersion: "NASB",			
    roundCorners: true,			
    customStyle : {
      heading: {
        backgroundColor : "#708448",
        color : "#000000",
        fontFamily : "Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif"
      },
      body   : {
        color : "#000000",
        fontFamily : "Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif"
      }
    }
  }
};
(function(d, t) {
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = "//api.reftagger.com/v2/RefTagger.js";
  s.parentNode.insertBefore(g, s);
}(document, "script"));
