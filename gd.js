// ==UserScript==
// @name         Knock down the door made of glass.
// @namespace    https://ohaiibuzzle.dev/
// @version      v0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.glassdoor.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=glassdoor.com
// @grant        none
// ==/UserScript==

(function() {
    let hardOverlay = document.getElementById('ContentWallHardsell');
    if (hardOverlay) {
        hardOverlay.remove();
    }
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    document.getElementsByTagName("body")[0].style.position = "unset";

    let style = document.createElement('style');
    style.innerHTML = `
    #LoginModal {
      display: none!important;
    }
    span {
      white-space: normal;
    }
  `;
    document.head.appendChild(style);

    window.addEventListener("scroll", function(event) {
        event.stopPropagation();
    }, true);
})();
