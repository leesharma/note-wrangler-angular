var app = require("./server/routes");

// Start the server
var server = app.listen(process.env.PORT || 8000, function() {
 console.log('Listening on port %d', server.address().port);
});
