$('.color-box').toggleClass('transperent');
// ***********************************Game Function***********************************//
var level;
var colors;
var inputColors;
function simon() {
  level = 0;
  colors = [];
  levelUpdate();

}
function levelUpdate() {
  level++;
  $('h1').text('Level '+ level);
  var newColor = randomColor();
  inputColors = [];
  colors.push(newColor);
  // highlighting the colors //
  highlight(colors[colors.length-1] + '-box');

}
$('.color-box').click(function () {
  if (this.classList.contains('red-box')){
    inputColors.push('red');
  }else if (this.classList.contains('green-box')){
    inputColors.push('green');
  }else if (this.classList.contains('blue-box')){
    inputColors.push('blue');
  }else{
    inputColors.push('yellow');
  }
  // Checking the sequence
  for (var i = 0; i < inputColors.length; i++){
    // If sequence breaks
    if (inputColors[i] !== colors[i]){
      var gameOverMsg = 'Game Over! Your score is ' + (level-1);
      $('body').toggleClass('bg-red');
      setTimeout(function () {
        $('body').toggleClass('bg-red');
      },100);
      $('.color-box').toggleClass('transperent');
      $('h1').text(gameOverMsg);
      $('button').text('Play Again');
      $('button').fadeIn();
      // simon();
    }else if (i === colors.length-1){
      levelUpdate();
    }
  }
});
// ------------------------------------Game Function-----------------------------------//

// ***********************************Random color Function***********************************//
var fourColors = ['red','green','blue','yellow'];
function randomColor() {
  var num = Math.random();
  num = Math.floor(num*4);
  return fourColors[num];
}
// ------------------------------------Random color Function-----------------------------------//

// ***********************************highlight Function***********************************//
function highlight(className) {
  $('.' + className).toggleClass('highlight');
  setTimeout(function () {
    $('.' + className).toggleClass('highlight');
  },250);
}
// ------------------------------------highlight Function-----------------------------------//
$('button').click(function () {
  $('.color-box').toggleClass('transperent');
  $('button').fadeOut();
  simon();
});
