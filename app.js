var path = require("path");
var fs = require("fs");


var express =require("./node_modules/express");
var app=express();
var bodyParser = require('./node_modules/body-parser');
var formidable = require('./node_modules/formidable');



app.all('*',function(req, res, next) {//处理跨域
    console.log(123123)
	res.header("Access-Control-Allow-Origin","*");
	// res.header("Access-Control-Allow-Headers","X-Requested-With");
	// res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type","*");  /**/
	next();
})


app.listen("8888",function () {
    console.log("服务启动")
});




// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "./../page"));









//拦截请求
app.post("/image",function (req,res) {
    // console.log(res)
    // var form = new formidable.IncomingForm();
    // form.encoding = 'utf-8';
    // form.uploadDir = path.join(__dirname + "/../page/upload");
    // form.keepExtensions = true;//保留后缀
    // form.maxFieldsSize = 2 * 1024 * 1024;
    // //处理图片
    // form.parse(req, function (err, fields, files){
    //     console.log(files.the_file);
    //     var filename = files.the_file.name
    //     var nameArray = filename.split('.');
    //     console.log(321)
    //     var type = nameArray[nameArray.length - 1];
    //     var name = '';
    //     for (var i = 0; i < nameArray.length - 1; i++) {
    //         name = name + nameArray[i];
    //     }
    //     var date = new Date();
    //     var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
    //     var avatarName = name + time + '.' + type;
    //     var newPath = form.uploadDir + "/" + avatarName;
    //     fs.renameSync(files.the_file.path, newPath);  //重命名
    //     res.send({data:"/upload/"+avatarName})
    // })
    // res.send({data:1})
});