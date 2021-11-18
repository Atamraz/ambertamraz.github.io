const express =require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// javascript for welcomeSlideIn
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("scrolled");
//       return;
//     } else {
//       entry.target.classList.remove("scrolled")
//     }
//   });
// });
// observer.observe(document.querySelector(".welcomeSlide"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});



app.listen(process.env.PORT || 3000, function (){
  console.log("server is running");
});
