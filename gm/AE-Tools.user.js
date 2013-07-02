// ==UserScript==
// @name        AE-Tools
// @namespace   e3e6.entellitrak
// @include     *.entellitrak.com*
// @version     1
// ==/UserScript==

var isProductionMode = true;
/**
 * Dev. paths
 */
var scriptsDev = [//"http://code.jquery.com/jquery-1.10.1.min.js",
                    "http://localhost:801/external/aeTools.js"];

var styleDev = ["http://localhost:801/external/aeTools.css"];
/**
 * Production paths
 */
var scriptsProd = [//"http://code.jquery.com/jquery-1.9.1.js",
               "https://rawgithub.com/e3e6/AE-Tools/master/js/aeTools.js",
              ];
var styleProd = ["https://rawgithub.com/e3e6/AE-Tools/master/css/aeTools.css"];
/**
 * Inser script element to page
 */ 
function insertScriptSrc(scriptsList){
  var length = scriptsList.length;
  var element = null;
  for (var i = 0; i < length; i++) {
    element = scriptsList[i];
    debug(">> append: " + element);
    var script = document.createElement("script");
        script.src = element;

    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
/**
 * 
 */
function insertCssSrc(scriptsList){
  var length = scriptsList.length;
  var element = null;
  for (var i = 0; i < length; i++) {
    element = scriptsList[i];
    debug(">> append: " + element);
    var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", element);
          
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
}

/**
 * Write to console if exist
 */
function debug(text){
  if(window.console){
    console.info(text);
  }
}

/**
 * Entry
 */
/**
 * Entry
 */
if(isProductionMode){
  insertScriptSrc(scriptsProd);
  insertCssSrc(styleProd);
}else{
  insertScriptSrc(scriptsDev);
  insertCssSrc(styleDev);
}
