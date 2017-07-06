//ini adalah cara require express nya
var express = require('express')

//biar bisa akses folder project
var path = require('path');

//ini cara intiate-nya
var app = express()

//ini untuk setup view engine
app.set('view engine', 'ejs');

//ini untuk setup public folder
var path_name = path.join(__dirname, 'public')
var express_static = express.static(path_name)
app.use(express_static);



//ini routing
app.get('/about', function(req, res){

  var ini_object_json = "INI ADALAH STRING"
  var ini_object_json_2 =  [12, 2, 3, 4]


  res.render(
              'about',
              //kalo kamu mau kirim variable ke view disini simpen nya
              {
                message_satu: ini_object_json,
                message_dua: ini_object_json_2
              }

)
})

app.get('/promotion', function(req, res){
  res.render('promotion')
})

app.listen(3000)
