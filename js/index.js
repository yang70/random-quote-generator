$(document).ready(function() {
  
  function quoteRequest() {
    // standard ajax request in order to set headers for this API
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
      type: 'GET',
      dataType: 'json',
      success: function() {},
      error: function() { alert('There was an error'); },
      beforeSend: setHeader
    }).done(function(data) {
      $("#quote").html(" " + data.quote);
      $("#author").html("<a href='https://en.wikipedia.org/wiki/" + data.author.split(" ").join("_") + "' target='_blank'>- " + data.author + "</a>");
    });
    
    function setHeader(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'PWJsxSSKMYmshWmVHBS5IKkDWw2vp1W5qDqjsn8r8CtN1Jwq8J');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('Accept', 'application/json');
    }
  }
  
  $("#getQuote").on("click", quoteRequest);
  
  $("#tweet").on("click", function(){
    var quote = $("#quote").text().trim(),
        author = $("#author a").text();
    
    var tweetText = '"' + quote + '" ' + author;
    
    // following line courtesy of http://kaidez.com/click-to-tweet-link
    window.open( "http://twitter.com/intent/tweet?text=" + tweetText, "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0" );
  })
  
  $("#tweet").mouseover(function() {
    $(this).css("background-color", "black");
  })
  
  $("#tweet").mouseout(function() {
    $(this).css("background-color", "#636363")
  })
  
  // call function to load a quote on page load
  quoteRequest();
  
});