function normalizeHeights() {
    var items = $(this).find('.item'); //grab all slides
    var heights = []; //create empty array to store height values
    var tallest; //create variable to make note of the tallest slide
    for(var i=0; i<items.length; i++){
        heights.push($(items[i]).height());
    }
    tallest = Math.max.apply(null, heights); //cache largest value
    items.css('min-height',tallest + 'px');
}

function resetHeights() {
    var items = $('.carousel .item');
    items.css('min-height','0'); //reset min-height
    $('.carousel').each(normalizeHeights);
}

$(function(){
    $('.carousel').each(normalizeHeights).on('slid.bs.carousel', normalizeHeights);
    $(window).on('resize orientationchange', resetHeights);
})

