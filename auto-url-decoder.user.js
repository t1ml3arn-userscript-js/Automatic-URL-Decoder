// ==UserScript==
// @name Automatic URL Decoder
// @namespace https://github.com/T1mL3arn
// @description:ru Декодирует все найденные на странице ссылки, похожие на "%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80", в удобочитаемое "привет мир"
// @description:en It decodes all cyrillic links on current page.
// @match *://*/*
// @version 1.0
// @run-at document-end
// @grant none
// @license GPLv3
// @updateURL https://greasyfork.org/scripts/40305-automatic-url-decodeder/code/Automatic%20URL%20Decodeder.user.js
// @supportURL https://github.com/T1mL3arn/Automatic-URL-Decoder/issues
// @homepageURL https://github.com/T1mL3arn/Automatic-URL-Decoder
// ==/UserScript==

let linkEreg = /(https|http|ftp|file):.+?(?=\s|$)/gi;
let linkEregLocal = /(https|http|ftp|file):.+?(?=\s|$)/i;
let obsOptions = { childList: true, subtree: true };

let underlineStyle = new Map([["border-bottom","2px solid currentColor"], ["margin-bottom", "-2px"]]);
// set one of style from above to enable 
// custom style for fixed links
let changedLinkStyle = null;

let obs = new MutationObserver((changes, obs) => {
  changes.forEach((change) => change.addedNodes.forEach((node) => fixLinks(node)) );
});
obs.observe(document.body, obsOptions);

function fixLinks(node) {
  if (node.nodeType === 3) {
    let content = node.textContent;
    if (content && content != '') {
      if (linkEregLocal.test(content)) {
        if (changedLinkStyle)
          replaceAndStyleLink(node);
        else {
          let decoded = content.replace(linkEreg, decodeURIComponent);
          if(decoded.length!=content.length)
            node.textContent = decoded;
        }
      }
    }
  } else if (node.childNodes && node.childNodes.length > 0) {
    node.childNodes.forEach(fixLinks);
  }
}

function replaceAndStyleLink(node) {
  let match;
  let offset = 0;
  let sibling = node;
  let content = node.textContent;
  obs.disconnect();
  while ((match = linkEreg.exec(content)) != null) {
    let fullMatch = match[0];
    let decoded = decodeURIComponent(fullMatch);
    if (decoded.length != fullMatch.length) {
      let span = document.createElement('span');

      changedLinkStyle.forEach((val, key) => span.style.setProperty(key, val));
      
      let range = document.createRange();
      range.setStart(sibling, linkEreg.lastIndex - match[0].length);
      range.setEnd(sibling, linkEreg.lastIndex);
      range.surroundContents(span);
      
      sibling = getNextTextSibling(span);
      content = sibling.textContent;
      span.textContent = decoded;
      linkEreg.lastIndex = 0;

      if (sibling == null)
        break;
    }
  }
  obs.observe(document.body, obsOptions);
}

function getNextTextSibling(node) {
  let next = node.nextSibling;
  while (next != null) {
    if (next.nodeType == 3)
      return next;
    else
      next = node.nextSibling;
  }
  return null;
}

fixLinks(document.body);