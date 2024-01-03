   
var selector='.new-p-heading li';
    $(selector).on('click',function(){
        $(selector).removeClass('active')
        $(this).addClass('active')
    });
    $(document).ready(function(){
        $('.new-p-heading li').click(function(){
            const value=$(this).attr('data-filter');
            if(value=='all'){
                $('.new-product-box').show('1000');
            }
            else{
                $('.new-product-box').not('.'+value).hide('1000');
                $('.new-product-box').filter('.'+value).show('1000');
            }
        });
    });
   
   