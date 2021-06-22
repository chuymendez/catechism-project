// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "22px 10px";
    document.getElementById("navbar").style.backgroundColor = '#496D89';
    document.getElementById("title").style.fontSize = "2rem";
    document.getElementById("title").style.color = '#ffffff';
    document.getElementById("title").style.textShadow = '2px 2px 2px #000000';
   
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("title").style.fontSize = "3rem";
    document.getElementById("title").style.color = '#362c2c';
    document.getElementById("title").style.textShadow = '1px 1px 1px #ffffff';
   
    
    
  }
}

var refTagger = {
  settings: {
    bibleVersion: "NASB",			
    roundCorners: true,			
    customStyle : {
      heading: {
        backgroundColor : "#496D89",
        color : "#000000",
        fontFamily : "Verdana, Geneva, sans-serif",
        fontSize : "14px"
      },
      body   : {
        color : "#000000",
        fontFamily : "Verdana, Geneva, sans-serif"
      }
    }
  }
};
(function(d, t) {
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = "//api.reftagger.com/v2/RefTagger.js";
  s.parentNode.insertBefore(g, s);
}(document, "script"));
