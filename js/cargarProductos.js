'use strict'

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
});