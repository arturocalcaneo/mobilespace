'use strict'

function cambiarCOPaDolar(){
    // Cambiar precios colombianos a dolar
    const priceElements= $('.agile_ecommerce_tab_left .simpleCart_shelfItem p').children();
    const priceElementsLenght= priceElements.length;

    var priceNativeElement
    var priceText;
    var priceProduct_USD;
    var evenPriceProduct;

    for(var i=0; i < priceElementsLenght; i++){
        priceNativeElement= $(priceElements[i]);
        priceText= (priceNativeElement.text()).substring(1,priceNativeElement.text().length);
        priceText= (priceText.replace(',','')).replace(',','');

        priceProduct_USD= (parseFloat(priceText))*0.00022;

        if(i%2== 0){
            evenPriceProduct= priceProduct_USD;
        }
        // Para los precios que se encuentran en una posición impar..
        if(i%2 == 1){
            // Convertir el costo normal rebajado al 30%
            priceProduct_USD= evenPriceProduct;
            priceProduct_USD-= priceProduct_USD*0.30;
        }
        
        priceProduct_USD= priceProduct_USD.toFixed(2);
        $(priceNativeElement).text(`$${priceProduct_USD.toLocaleString()}`);
    }
}

/**
 * ASIGNAR HREF A PASARELA DE PAGO EN LOS BOTONES DE COMPRAR
 */
function asignarHrefLinkTag(pasarelaPagoHtml_path=null){
    if(pasarelaPagoHtml_path != null){
        var html= null;
        const parentProducts= $('.agile_ecommerce_tabs .agile_ecommerce_tab_left');
                              $('.agile_ecommerce_tabs a.w3ls-cart').removeAttr('href');

        for(var j=0; j < parentProducts.length; j++){
            // formulario_comprar_${j}
            $(parentProducts[j]).find('a.w3ls-cart').attr('onclick',`$('#formulario_comprar_${j}').click()`)

            let imgSource= $(parentProducts[j]).find('img').attr('src');
            let titleProduct= $(parentProducts[j]).find('h5').text();
            let normalValueProduct= $(parentProducts[j]).find('span').text();
                normalValueProduct= normalValueProduct.replace('$','');

            let valueDiscountProduct= $(parentProducts[j]).find('.item_price').text();
                valueDiscountProduct= valueDiscountProduct.replace('$','');

            html= `<form method="GET" action="${pasarelaPagoHtml_path}">
                        <input type="hidden" value="${imgSource}" name="image_source">
                        <input type="hidden" value="${titleProduct}" name="title_product">
                        <input type="hidden" value="${normalValueProduct}" name="normalValue_product">
                        <input type="hidden" value="${valueDiscountProduct}" name="valueDiscount_product">
                        <input type="submit" id="formulario_comprar_${j}" style="display:none">
                   </form>`;

            // Generar un formulario por cada boton comprar...
            $(parentProducts[j]).find('.simpleCart_shelfItem').append(html);
        }
    }
}