$(document).ready(function(){

  function clickHandler(){
    var term = this.id;
    $.ajax({url: "http://da3b8aaa.ngrok.io/yelp/29.2108,-81.0228/"+term, success: function(result){
        var outputs = result.businesses;
        alert('The best 3 places for '+ term +' are ' + outputs[0].name +', '+outputs[1].name +', and '+ outputs[2].name);
    }});
  }

	$('.termbutton').on('click', clickHandler);

});
