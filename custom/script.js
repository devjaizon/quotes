var data;
var current;
$.getJSON('lib/quotes.json', function(json) {
  data = json;
});
$(document).ready(function() {
    $('html').css('visibility', 'visible');
    jsonQuote();
    $('#get-quote').on('click', function() {
        jsonQuote();
    });
    $('#twitter').on('click', function() {
        var quote = $('#quote').text();
        var author = $('#author').text();
        var post = '"' + quote + '"' + author + '!';
        window.open("https://twitter.com/intent/tweet?text=" + post,"_blank");
        console.log(post);
        //post;
    });
    function jsonQuote() {
        current = Math.floor(Math.random() * data.length);
        $('#quote').html('<p id="quote-style">' + data[current].quote + '</p>');
        $('#author').html('<p id="author-style"> - ' + data[current].author + '</p>');
    }
});