$(document).ready(function(){
    // Header fixing
    /*$('#header').removeClass('header-fixed');
    $(window).scroll(function(){
        if($(this).scrollTop > 20){
            $('#header').addClass('header-fixed');
        } else {
            $('#header').removeClass('header-fixed');
        }
    });*/

    // Column height in
    function heightLeveler(column) {
        var blockHeight = 0;
        column.each(function(){
            var thisHeight = $(this).height();
            if(thisHeight > blockHeight){
                blockHeight = thisHeight;
            }
        });
        column.height(blockHeight);
    };
    heightLeveler($('.special-serv_item'));
    heightLeveler($('.memo-item'));
    heightLeveler($('.funner-cost_item'));
    heightLeveler($('.funner-cost_item-heading'));
    heightLeveler($('.privileges-item'));
    heightLeveler($('.funner-free_item'));
    heightLeveler($('.up-guarantee_item'));

});