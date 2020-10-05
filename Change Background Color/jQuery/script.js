
const colorBtn = $('.colorBtn');

const colors = ['yellow', 'red', 'green', '#e3dd84'];

$('.colorBtn').click(function() {
    let random = Math.floor(Math.random() * colors.length);
    $('body').css('background-color' , colors[random]);
});