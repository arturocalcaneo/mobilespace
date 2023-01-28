'use strict'

function cambiarCOPaDolar(){
    // Cambiar precios colombianos a dolar
    const priceElements= $('.agile_ecommerce_tab_left .simpleCart_shelfItem p').children();
    const priceElementsLenght= priceElements.length;

    for(var i=0; i < priceElementsLenght; i++){
        let priceNativeElement= $(priceElements[i]);

        let priceText= (priceNativeElement.text()).substring(1,priceNativeElement.text().length);
            priceText= (priceText.replace(',','')).replace(',','');
        let priceProduct_COP= parseFloat(priceText);
        let priceProduct_USD= (priceProduct_COP*0.00022).toFixed(2);
        
        $(priceNativeElement).text(`$${priceProduct_USD.toLocaleString()}`);
    }
}

function obtenerValorDolar(){
    
}