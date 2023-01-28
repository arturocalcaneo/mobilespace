'use strict'

/**
 * APILayer Key Access (aa.calcaneob@gmail.com)
 * kAMmy7v7Tz7QQDirgmbw03mHCRNXFfLo
 */

/**
 * APILayer Key Access (arthurogoldenon@gmail.com)
 * XvJ7lZfJGvBGfCIBMS41v0iKLDtPTjqM
 */

const samsungTab= $('#samsung');
const appleTab= $('#apple');
const honorTab= $('#honor');
const xiaomiTab= $('#xiaomi');
const huaweiTab= $('#huawei');
const oppoTab= $('#oppo');

const folderTabsName= "viewTabs";

$(document).ready(function(){
    samsungTab.load(`./${folderTabsName}/samsung.html`);
    appleTab.load(`./${folderTabsName}/apple.html`);
    honorTab.load(`./${folderTabsName}/honor.html`);
    xiaomiTab.load(`./${folderTabsName}/xiaomi.html`);
    huaweiTab.load(`./${folderTabsName}/huawei.html`);
    oppoTab.load(`./${folderTabsName}/oppo.html`);

    // Cambiar precios colombianos a dolar
    console.log($('.agile_ecommerce_tab_left'));
});

function obtenerValorDolar(){
    
}