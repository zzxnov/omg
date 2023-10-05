$(document).ready(function(){
    $('.tabmenu li').click(function(e){
        e.preventDefault();
        $('.tabmenu li').find('a').removeClass('active')
        $(this).find('a').addClass('active')
        $('.tab-item').hide();
        const idx = $(this).index();
        $('.tab-item').eq(idx).show();
    })

    $('.tabmenu li').eq(0).trigger('click')
})