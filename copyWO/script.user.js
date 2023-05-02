// ==UserScript==
// @name         CopyWO
// @namespace    https://github.com/DanJunk/copyWO/
// @version      1.0.0
// @description  Copy the Workorder Number right out of the Ticket
// @author       danJunk
// @match        https://t.corp.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     STYLE1 https://raw.githubusercontent.com/DanJunk/copyWO/main/copyWO/scripts/style.css
// @require      https://raw.githubusercontent.com/DanJunk/copyWO/main/copyWO/scripts/content.js
// ==/UserScript==

GM_addStyle (GM_getResourceText("STYLE1"));
