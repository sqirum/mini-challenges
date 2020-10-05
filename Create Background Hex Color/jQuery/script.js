const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

$('.hexBtn').click(function() {
    let hexCode = '#'
    for(let i=0; i<6;i++) {
        let random = Math.floor(Math.random()* arr.length);
        hexCode = hexCode + arr[random];
    }
    $('.hex').text(hexCode);
    $('.body').css('background-color' , hexCode);
});