// ==UserScript==
// @name        Hub Rez
// @namespace   hub_rez
// @description Changes GitHub appearance for mobile. All trademarks are the property of their respective owners.
// @updateURL https://github.com/juneyourtech/GM_Hub/raw/master/Hub_rez.user.js
// @version     1.0.1.3
// @include     https://github.com/*
// @include     https://*.github.com/*
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("HTML > BODY {min-width:240px;}"); //

GM_addStyle("@media only screen and (max-width:302px) { DIV.header .header-search {width:auto; min-width:240px; max-width:300px; margin-right:0px;} }");

GM_addStyle("DIV.HeaderMenu > DIV.d-flex:first-child {display:inline !important;}"); //28.03.2018
GM_addStyle("DIV.HeaderMenu > DIV.d-flex:first-child > DIV {display:inline; float:left;}"); //28.03.2018
GM_addStyle("DIV.HeaderMenu > DIV.d-flex:first-child > UL {display:inline-flex !important;}"); //28.03.2018

GM_addStyle("DIV.HeaderMenu > DIV.d-flex:last-child {min-width:116px;}"); //28.03.2018

GM_addStyle("DIV.container, NAV.container {width:auto; max-width:980px;}"); //
//28.03.2018: +second selector

GM_addStyle("UL.user-nav {margin-right:0px;}"); //

GM_addStyle("DIV.file-wrap > TABLE.files TD.message .css-truncate, DIV.file-wrap > TABLE.files TD.age .css-truncate {white-space:normal;}"); //

//Older: {max-width:unset;}");

GM_addStyle("DIV.file-actions {padding-left:84px;}"); //

//WIKI and SIDEBAR
GM_addStyle("DIV.wiki-body .markdown-body {padding:0px 10px; margin:0px;}");

GM_addStyle("@media only screen and (max-width:825px) { DIV.has-rightbar .wiki-body, DIV.has-rightbar .wiki-footer {margin-right:unset;}   DIV.wiki-rightbar {border:solid 1px Silver; margin-left:7px;}  DIV.wiki-wrapper .wiki-footer .wiki-empty-box {margin:0px 0px;} }");

GM_addStyle("@media only screen and (max-width:460px) { DIV.wiki-body .markdown-body {padding:0px 5px;}  DIV.wiki-rightbar {width:180px;} }");

GM_addStyle("@media only screen and (max-width:360px) { DIV.wiki-rightbar {width:160px;} }");

GM_addStyle("@media only screen and (max-width:320px) { DIV.wiki-body .markdown-body {padding:0px 2px;} }");
