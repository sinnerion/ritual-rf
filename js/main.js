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

    // Smooth transition of sections
    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 70}, 1100);
        return false;
    });

    $('.navbar-nav a').click(function () {
        $('.collapse').collapse('toggle');
    });

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
    // heightLeveler($('.special-serv_item'));
    // heightLeveler($('.memo-item'));
    // heightLeveler($('.funner-cost_item'));
    heightLeveler($('.funner-cost_item-heading'));
    // heightLeveler($('.privileges-item'));
    // heightLeveler($('.funner-free_item'));
    // heightLeveler($('.up-guarantee_item'));

    // Flexbox fix
    ;( function( $, window, document, undefined )
    {
        'use strict';

        var s = document.body || document.documentElement, s = s.style;
        if( s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '' ) return true;

        var $list       = $( '.equal-height' ),
            $items      = $list.find( '.equal-height_item' ),
            setHeights  = function()
            {
                $items.css( 'height', 'auto' );

                var perRow = Math.floor( $list.width() / $items.width() );
                if( perRow == null || perRow < 2 ) return true;

                for( var i = 0, j = $items.length; i < j; i += perRow )
                {
                    var maxHeight   = 0,
                        $row        = $items.slice( i, i + perRow );

                    $row.each( function()
                    {
                        var itemHeight = parseInt( $( this ).outerHeight() );
                        if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                    });
                    $row.css( 'height', maxHeight );
                }
            };

        setHeights();
        $( window ).on( 'resize', setHeights );
        $list.find( 'img' ).on( 'load', setHeights );

    })( jQuery, window, document );

});