const { log } = require("console");
var express = require("express");
var router = express.Router();

var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  fs.readdir("./files", { withFileTypes: true }, (err, data) => {
    if (err) {
      console.log("err");
    }

    res.render("index", { data });
    // data.forEach(function(file){
    //   console.log(file.name);
    // })
  });
});

//create file
router.get("/filebanao", function (req, res, next) {
  fs.writeFile(`./files/${req.query.filekanaam}`, "", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("kaam hogya bhi ji apki file ban gyi hai");
    }
  });
  res.redirect("back");
});

//create folder

router.get("/folderbanao", function (req, res, next) {
  fs.mkdir(`./files/${req.query.folderkanaam}`, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("kaam hogya bhi ji apki folder ban gyi hai");
    }
  });
  res.redirect("back");
});

//delete file
router.get("/deleteThisFile/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) {
      console.log(err, "err");
    } else {
      console.log("delete hogya");
    }
  });
  res.redirect("back");
});

//delete folder
router.get("/deleteThisFolder/:filename", (req, res) => {
  fs.rmdir(`./files/${req.params.filename}`, (err) => {
    if (err) {
      console.log(err, "err");
    } else {
      console.log("delete hogya");
    }
  });
  res.redirect("back");
});

//edit

router.get("/editThisFile/:filename", (req, res) => {
  fs.readdir("./files", { withFileTypes: true }, (err, data) => {
    if (err) {
      console.log("err");
    }

    res.render("update", { name: req.params.filename, data });
  });
});

//update
router.post("/update/:filename", (req, res) => {
  fs.rename(
    `./files/${req.params.filename}`,
    `./files/${req.body.updatedname}`,
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

router.get("/write/:filename", (req, res) => {
  fs.readdir("./files", { withFileTypes: true }, (err, data) => {
    if (err) {
      console.log("err");
    }

    fs.readFile(
      `./files/${req.params.filename}`,
      "utf8",
      function read(err, info) {
        if (err) {
          throw err;
        }
        res.render("file", {
          data,
          filename: req.params.filename,
          textdata: info,
        });
      }
    );
  });
});

router.post("/save/:filename", (req, res) => {
  fs.writeFile(`./files/${req.params.filename}`, req.body.text, function (err) {
    if (err) {
      return console.log(err);
    }
    res.redirect("back");
  });
});

module.exports = router;
