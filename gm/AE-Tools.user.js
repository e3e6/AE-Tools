// ==UserScript==
// @name        AE-Tools
// @namespace   e3e6.entellitrak
// @include     *.entellitrak.com*
// @exclude     *.entellisql.create.request.do
// @version     7
// ==/UserScript==




// [1] wrap the script in a closure (opera, ie)
// do not spoil the global scope
// The script can be transformed into a bookmarklet easily :)
(function(window, undefined ) {
 
  // [2] normalized window
  var w;
  if (typeof unsafeWindow != undefined){
    w = unsafeWindow 
  } else {
    w = window;  
  }
 
// You can inject almost any javascript library here.
// Just pass the w as the window reference,
// e.g. jquery.min.js embedding:
   // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);
   
  // [3] do not run in frames
  if (w.self != w.top){
    return;
  }
 
  // [4] additional url check.
// Google Chrome do not treat @match as intended sometimes.
//  if (/http:\/\/userscripts.org/.test(w.location.href)){
    // Below is the userscript code itself
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
  
 // }
})(window);
