$(document).ready(function(){
    var i = 1;
    $('.add').click(function()
        {i++;
            html ='';
            html +='<div id="remove_'+i+'" >';
               
            html +='<input type="number" placeholder="qty" id="qty_'+i+'" required="" onkeyup="return qty('+i+')" name="qty[]" >';
            html +='<input type="number" id="price_'+i+'" placeholder="Price" required="" onkeyup="return price('+i+')"  name="price[]" >';
            html +='<input type="number" placeholder="subtotal" id="subtotal_'+i+'" readonly   name="subtotal[]" class=" subtotal">';
            html +='<button  onclick="return remove('+i+')">Remove</button>';
            html +='</div>';
            $('#showItem').append(html);
        });



});


function qty(id)
{
    var qty = $('#qty_'+id).val();
    var price = $('#price_'+id).val();
    //
    //console.log(qty);
    //console.log(price);
    //alert(qty);
    ////alert(price);
    var result = parseInt(qty) * parseInt(price);
    $('#subtotal_'+id).val(result);
    total_price();
}

function price(id)
{
    var qty = $('#qty_'+id).val();
    var price = $('#price_'+id).val();
    
    var result = parseInt(qty)*parseInt(price);
    $('#subtotal_'+id).val(result);

    //alert(result);
    total_price();
}

function total_price()
{
    var total = 0;
    $('.subtotal').each(function() {
    total +=parseInt($(this).val()); 
    //console.log(total);
    });
    $('#total').val(total);
}



function remove(id)
{
    $('#remove_'+id).remove();
    total_price();
}