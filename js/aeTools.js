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
          
      toolbar.innerHTML = "<li><label onclick='window.open(\"https://ae-yoda.atlassian.net/wiki/display/DH/AE+Tools\",\"_blank\")' style='font-weight: bold;'>AE Tools:</label>"
      + "<li>|</li>"

      + "<li><a href='home.do'>Home</a></li>"
       + "<li>|</li>"

      + "<li><a href='page.request.do?page=page.utilities.web.logviewer'>Log Viewer</a></li>"
       + "<li><a href='entellisql.create.request.do'>SQL</a></li>"
        + "<li><a href='page.request.do?page=page.codeSearch'>Code Search</a></li>"
        + "<li><a href='page.shared.do'>Pages</a></li>"
                        + "<li>|</li>"
         + "<li><a href='#' id='re-open-link'>Re-open</a></li>"
      
      var toolDiv = document.createElement("div");
          toolDiv.setAttribute('class', 'toolbar');
          toolDiv.appendChild(toolbar);
          
      var toolDivCont = document.createElement("div");
          toolDivCont.setAttribute('style', 'display:none;');
          toolDivCont.setAttribute('class', 'toolbarContainer');
          toolDivCont.appendChild(toolDiv);
          
      if(window.document.getElementsByTagName('body').length > 0){
          window.document.getElementsByTagName('body')[0]
            .insertBefore(toolDivCont, document.body.childNodes[0])
      }
      
      document.getElementById("re-open-link").click = function(){
          window.location.href = window.location.href.replace('tracking.update.request', 'workflow');
      };
    }
    
    
    createUI();
    
})(window);
