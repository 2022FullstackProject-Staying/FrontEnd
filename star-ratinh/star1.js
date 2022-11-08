$('.starRating span').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().addClass('starRated');
  
  // Added for Demo
  let rating = $(this).index() + 1;
  $('#currentRating').html( "<small>Rating: <b>" + rating + "</b></small>" );
});