
; /* Start:"a:4:{s:4:"full";s:108:"/local/templates/active/components/bitrix/news/products/bitrix/news.detail/.default/script.js?16381242081118";s:6:"source";s:93:"/local/templates/active/components/bitrix/news/products/bitrix/news.detail/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
    $('.tabs ul li').on('click', function () {
        let data = $(this).data('target');
        $('.tabs').find('.active').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        $('#'+data).addClass('active');
    });
    $('.tabs2 ul li').on('click', function () {
        let data = $(this).data('target');
        $('.tabs2').find('.active').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        $('#'+data).addClass('active');
    });



    $(".section-block-nav").on('click',function (e){
        e.preventDefault();
        let target = $(this).data('change');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.'+target).each(function (index){
                $(this).hide();
            })
        } else {
            $(this).addClass('active');
            $('.'+target).each(function (index){
                $(this).show();
            })
        }
    })
});

/* End */
;; /* /local/templates/active/components/bitrix/news/products/bitrix/news.detail/.default/script.js?16381242081118*/
