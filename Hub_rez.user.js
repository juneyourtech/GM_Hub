// ==UserScript==
// @name        Hub Rez
// @namespace   hub_rez
// @description Changes GitHub appearance for mobile. All trademarks are the property of their respective owners.
// @include     *.github.com/*
// @version     1.0.0.1
// @grant       GM_addStyle
// ==/UserScript==

/*
@updateURL https://github.com/juneyourtech/GM_GitHub/raw/master/wikipedia_vector.user.js */

GM_addStyle("HTML > BODY {min-width:320px;}") //

GM_addStyle("DIV.container {width:auto; max-width:980px;}") //

GM_addStyle("UL.user-nav {margin-right:0px;}") //

GM_addStyle("DIV.file-wrap > TABLE.file TD.message .css-truncate {max-width:unset;}") //

//GM_addStyle("@media screen {A:visited {color:MediumPurple; text-decoration:underline; background:linear-gradient(to right, yellow, transparent 50%, transparent 100%) !important;} }") //visited color WORKS, background-color doesn't. SlateBlue is ok.
