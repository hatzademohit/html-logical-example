
$(document).ready(function(){
    var fifthBlockWidth = $('.fifthdBlock').width();
    $('.comboBorder').width(fifthBlockWidth - 130);

})

// $('#secondBlock1').hide();
// $('#secondBlock2').hide();
// $('.secondBlock').hide();
// $('#thirdBlock2').hide();
// $('#thirdBlock1').hide();
// $('.forthdBlock').hide();
// $('#fifthdBlock2').hide();
// $('#fifthdBlock3').hide();
// $('.fifthdBlock').hide();

var secondBlock1 = $("#secondBlock1").is(":visible");

var thirdBlock1 = $("#thirdBlock1").is(":visible");

var fifthdBlock2 = $("#fifthdBlock2").is(":visible");

var fifthdBlock3 = $("#fifthdBlock3").is(":visible");

var secondBlock2 = $("#secondBlock2").is(":visible");

var thirdBlock2 = $("#thirdBlock2").is(":visible");

var forthdBlock = $(".forthdBlock").is(":visible");

var fifthdBlock = $(".fifthdBlock").is(":visible");

if(secondBlock1 == false){
    $('.firstBlock .secondBorder').hide();
    $('.secondBlock').css('margin-top' , '113px');
    $('.thirdBlock').css('margin-top' , '73px');
    $('.forthdBlock').css('margin-top' , '247px');
    $('.fifthdBlock').css('margin-top' , '274px');
    $('.sixthBlock').css('margin-top' , '446px');
    $('.firstBorder').addClass('show');
}

if(thirdBlock1 == false){
    $('.secondBorder.fourthBorder').hide();
    $('.thirdBlock').css('margin-top' , '176px');
    $('.forthdBlock').css('margin-top' , '247px');
    $('.fifthdBlock').css('margin-top' , '274px');
    $('.sixthBlock').css('margin-top' , '446px');
    $('#secondBlock2 .thirdBorder').addClass('show');

}

if(thirdBlock1 == false && secondBlock1 == false){
    $('.thirdBlock').css('margin-top' , '115px');
    $('.forthdBlock').css('margin-top' , '189px');
    $('.fifthdBlock').css('margin-top' , '219px');
    $('.sixthBlock').css('margin-top' , '388px');
}

if(fifthdBlock2 == false){
    $('.sixthBlock').hide();
    $('.comboBorder').addClass('show');
    $('.topBorder').css('position' , 'initial')
}

if(fifthdBlock3 == false){
    $('#fifthdBlock2 .topBorder').hide();
    $('.comboBorder').hide();
    $('.fifthdBlock').css('padding-top' , '20px');
    $('.sixthBlockBorder').css('right' , '110px');
}

if(secondBlock2 == false){
    $('.thirdBlock, .forthdBlock, .fifthdBlock, .sixthBlock').hide();
    $('.secondBorder').hide();
    $('.secondBlock').css('margin-top' , '137px');
    $('.firstBorder').addClass('show');
}

if(thirdBlock2 == false){
    $('.forthdBlock, .fifthdBlock, .sixthBlock').hide();
    $('.thirdBlockBorder, #secondBlock2 .secondBorder').hide();
    $('.thirdBlock').css('margin-top' , '194px');
    $('.thirdBorder').addClass('show');
}

if(forthdBlock == false){
    $('.fifthdBlock, .sixthBlock').hide();
    $('.thirdBlockBorder').hide();
}

if(fifthdBlock == false){
    $('.sixthBlock').hide();
    $('.fourthdBlockBorder').hide();
}

if(secondBlock1 == false && secondBlock2 == false){
    $('.thirdBlock, .forthdBlock, .fifthdBlock, .sixthBlock').hide();
    $('.firstBorder').hide();
}

if(fifthdBlock2 == false && fifthdBlock3 == false){
    $('.topBorder').hide();
}

if(thirdBlock1 == false && thirdBlock2 == false){
    $('.thirdBorder').hide();
}

if(secondBlock1 == false && thirdBlock2 == false){
    $('.thirdBlock').css('margin-top' , '134px');
}