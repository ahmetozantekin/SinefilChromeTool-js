$(function(){

  var name = window.location.href;            //  http://localhost/sdn-sinema/sample.php?filmName=the+example
  var url_array = name.split("?");            //  [0] => {http://localhost/sdn-sinema/sample.php}, [1]=>{filmName=the+example}
  var getmoviename = url_array[1].split("="); //  [0] => {filmName}, [1] => {the+example}
  var moviename = getmoviename[1];            //  the+example

  $.ajax({
    type: 'GET',
    url: 'http://www.omdbapi.com/?t='+moviename+'&y=&plot=short&r=json',
    success: function(response) {
    $('table').append('<tr><td><img style="height:200px; width:150px" src='+response.Poster+'></td><td>'+response.Director+'</td><td>'+response.Year    +'</td></tr>');
    },
    error: function() {
      console.error("Sıçtık");
    }
  })
})
