// ==UserScript==
// @name         bilibili dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Elpis
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'
  const gb_color = '#2d3436';
  const gb2_color = '#636e72';
  const text_color = '#dfe6e9';
  const text2_color = '#b2bec3';
  const body = document.querySelector('body');
  const styles = `--bg1: ${gb_color};--bg2: ${gb_color};--bg3: ${gb_color};--bg1_float: ${gb_color};--text1: ${text_color};--text2: ${text_color};--text3: ${text2_color};--text4: ${text2_color};--graph_bg_thin: ${gb_color};--graph_bg_regular: ${gb2_color}`;
  body.style = styles;
})()
