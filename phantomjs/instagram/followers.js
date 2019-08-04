var page = require('webpage').create();
page.open('https://www.instagram.com/ppfgirl/', function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    var followers = page.evaluate(function() {
    	var span = $("span:contains('followers'):not(:has(section))")
    	return span.children().attr('title');
    });
    console.log(followers);
    phantom.exit();
  });
});