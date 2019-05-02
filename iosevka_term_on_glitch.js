// ==UserScript==
// @name         Iosevka Term on Glitch.com
// @namespace    http://ilmoeuro.github.io/
// @version      0.1
// @description  Change the font on glitch.com
// @author       Ilmo Euro <ilmo.euro.gmail.com>
// @match        https://glitch.com/edit/
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function() {
  var style = document.createElement('style');
  style.textContent = ".CodeMirror { font-family: 'Iosevka Term' !important; }";
  document.head.appendChild(style);
});