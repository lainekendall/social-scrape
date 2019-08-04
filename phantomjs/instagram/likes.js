phantom.exit();
var page = require('webpage').create();
// page.onError = function (msg, trace) {
//     console.log(msg);
//     trace.forEach(function(item) {
//         console.log('  ', item.file, ':', item.line);
//     });
// };
// page.onResourceRequested = function (request) {
//     console.log('Request ' + JSON.stringify(request, undefined, 4));
// };
// page.onUrlChanged = function(targetUrl) {
//     console.log('New URL: ' + targetUrl);
// };
// page.onLoadFinished = function(status) {
//     console.log('Load Finished: ' + status);
// };
// page.onLoadStarted = function() {
//     console.log('Load Started');
// };
// page.onNavigationRequested = function(url, type, willNavigate, main) {
//     console.log('Trying to navigate to: ' + url);
// };
console.log('here');
var links = [];
console.log('here');
page.open('https://www.instagram.com/ppfgirl/');
page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js");
page.evaluate(function() {
	var posts = $("a".not("header *")).toArray();
	links.push([for (post of posts) post.attr("href")]);
	return "hi";
});
console.log(postUrl);
phantom.exit();

	// page.open('https://www.instagram.com/ppfgirl/' + postUrl, function() {
	// 	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
	// 		var likes = page.evaluate(function() {
	// 			$("span:contains('likes')");
	// 		});
	// 		console.log(likes);
	// 		phantom.exit();
	// 	});
	// });