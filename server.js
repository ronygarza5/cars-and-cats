const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

app.get('/', (request, response) => {
   response.send("Welcome to Cars and Cats...");
   

});
app.listen(8000, () => console.log("listening on port 8000"));
