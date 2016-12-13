function normalizeHeights($carousel) {
    var items = $carousel.find('.item'); //grab all slides
    var heights = []; //create empty array to store height values
    var tallest; //create variable to make note of the tallest slide
    for(var i=0; i<items.length; i++){
        heights.push($(items[i]).height());
    }
    tallest = Math.max.apply(null, heights); //cache largest value
    items.css('min-height',tallest + 'px');
}

function carouselNormalization() {
    $('.carousel').each(function() {
        var $carousel = $(this);
        var items = $carousel.find('.item'); //grab all slides

        normalizeHeights($carousel);

        $(window).on('resize orientationchange', function () {
            var $carousel = $(this);
            var items = $carousel.find('.item');
            items.css('min-height','0'); //reset min-height
            normalizeHeights($carousel); //run it again
        }.bind($carousel));

        $carousel.on('slid', function() {
            normalizeHeights($(this));
        });
    });
}

$(function(){
    carouselNormalization();
})
