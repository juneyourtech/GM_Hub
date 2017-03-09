// ==UserScript==
// @name        Hub Rez
// @namespace   hub_rez
// @description Changes GitHub appearance for mobile. All trademarks are the property of their respective owners.
// @updateURL https://github.com/juneyourtech/GM_Hub/raw/master/Hub_rez.user.js
// @version     1.0.0.4
// @include     https://github.com/*
// @include     https://*.github.com/*
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("HTML > BODY {min-width:240px;}") //

GM_addStyle("@media only screen and (max-width:302px) {DIV.header .header-search {width:auto; min-width:240px; max-width:300px; margin-right:0px;} }")

GM_addStyle("DIV.container {width:auto; max-width:980px;}") //

GM_addStyle("UL.user-nav {margin-right:0px;}") //

GM_addStyle("DIV.file-wrap > TABLE.files TD.message .css-truncate {white-space:normal;}") //
//Older: {max-width:unset;}")

GM_addStyle("DIV.file-actions {padding-left:84px;}") //
