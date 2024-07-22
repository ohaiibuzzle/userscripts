// ==UserScript==
// @name         Knock down the door made of glass.
// @namespace    https://ohaiibuzzle.dev/
// @version      v0.0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.glassdoor.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=glassdoor.com
// @grant        none
// ==/UserScript==

(function() {
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

    setInterval(function() {
        let t1Overlay = document.getElementById('Cont' + 'entW' + 'allH' + 'ardsell');
        if (t1Overlay) {
            t1Overlay.hidden = true
        }

        let t2Overlay = document.getElementById('Har' + 'dsel' + 'lOver' + 'lay');
        if (t2Overlay) {
            t2Overlay.hidden = true;
        }

        window.addEventListener("scroll", function(event) {
            event.stopPropagation();
        }, true);
    });
})();
