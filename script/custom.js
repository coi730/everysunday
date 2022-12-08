

var count = 0;

$('.coffeebeans-next').click(function() {
    $('.coffeebeans-slide ul').animate({marginLeft: -720}, 500, function() {
        $('.coffeebeans-slide ul').append($('.coffeebeans-slide ul li:nth-child(1)')).stop().css({marginLeft:0});
        
    })
    
    count++;
    if(count%2==0) {
        $('.coffeebeans-textbox:first-child').css({
            display: 'block'
        })
        $('.coffeebeans-textbox:last-child').css({
            display: 'none'
        })
          
    }else {
        $('.coffeebeans-textbox:first-child').css({
            display: 'none'
        })
        $('.coffeebeans-textbox:last-child').css({
            display: 'block'
        })
    }
});


