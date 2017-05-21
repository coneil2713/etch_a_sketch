function newBox(size, gridSize){
	for (i = 0; i < size*size; i++) {
  	$("#container").append('<div id="box" class="square"></div>');
    $(".square").css({'height':gridSize, 'width':gridSize});
  };
  
    $('.square').on('mouseenter', function() {
   		$(this).css({'background-color': '#49274A'});
  	});
};


$(document).ready(function() {
	var size = 20
	var gridSize = 500/size
  newBox(size, gridSize);
  
  
  $('#clear').on('click', function() {
  	$('.square').css({'background-color': '#F4DECB'});
  });
  
  
  $('#new').on('click', function() {
  	$('.square').remove();
    
  	var newSize = prompt("How many squares to a side (16-25)?", "16");
    while (isNaN(newSize) || newSize < 16 || newSize > 25) {
    	newSize = prompt("Please enter a number between 16 and 25");
    }
    var gridSize = 500/newSize
    
    newBox(newSize,gridSize);
  });
  
});