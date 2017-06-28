var data;
var current;
$.ajax({
    url: 'https://raw.githubusercontent.com/jaizon/json/master/quotes.json',
    type: 'GET',
    dataType: 'json',
    success: function (json) {
        return data = json;
    }
})
$(document).ready(function() {
    $('html').css('visibility', 'visible');
    setTimeout(jsonQuote, 500);
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
