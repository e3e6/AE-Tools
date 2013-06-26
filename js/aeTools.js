
function initAeTools(){
    debug('AE-Tools | initiated');
    
    createUI();
}



/**
 * Safe debug out
 */
function debug(msg){
  if(window.console){
    window.console.log(">> " + msg);
  }
}

/**
 * Cross-browser listener
 * @param evnt Event name
 * @param elem Element
 * @param func Function will be executed when event will occur
 * @returns {*}
 */
function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
        return r;
    }
}

/**
 * Entry
 */
 //listen("load", window, initAeTools);
(function (window, undefined) {

    function createUI(){
      debug('AE-Tools | initiated');
      var toolbar = document.createElement("ul");
          //toolbar.setAttribute('class', 'separator');
      toolbar.innerHTML = "<li><label onclick='window.open(\"https://ae-yoda.atlassian.net/wiki/display/DH/AE+Tools\",\"_blank\")' style='font-weight: bold;'>AE Tools:</label>"
      + "<li><img class='seperator' border='0' src='web-pub/component/grid/images/seperator.jpg'></li>"

      + "<li><a href='home.do'>Home</a>"
       + "<li><img class='seperator' border='0' src='web-pub/component/grid/images/seperator.jpg'></li>"

      + "<li><a href='page.request.do?page=page.utilities.web.logviewer'>Log Viewer</a>"
       + "<li><a href='entellisql.create.request.do'>SQL</a>"
        + "<li><a href='page.request.do?page=page.codeSearch'>Code Search</a>"
                        + "<li><img class='seperator' border='0' src='web-pub/component/grid/images/seperator.jpg'></li>";
      
      var toolDiv = document.createElement("div");
          toolDiv.setAttribute('class', 'toolbar');
          toolDiv.appendChild(toolbar);
          
      var toolDivCont = document.createElement("div");
          toolDivCont.setAttribute('class', 'toolbarContainer');
          toolDivCont.appendChild(toolDiv);
          
      document.body.insertBefore(toolDivCont, document.body.childNodes[0])
    }
    
    
    createUI();
    
})(window);