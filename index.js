var http = require("http");
const port = 8000;

const htmlContent = ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <h2>About Me</h2>
    <p>Hello! I'm a student at Goldsmiths and a web developer in training, attempting to create simple and effective web applications.</p>
    <p>In my free time, I love indulging in hobbies such as fighting games and the simple sport of badminton.</p>
    <script src="index.js"></script>
</body>
</html>
`;

http.createServer(function(req, res) {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlContent);
    }).listen(port, function() {
        console.log('Node server is running on port ${port}...');
    });