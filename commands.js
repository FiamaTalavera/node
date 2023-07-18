const fs = require('fs')

module.exports = {
  pwd: function() {
    console.log(process.mainModule.path)
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    console.log(Date())
    process.stdout.write('\nprompt > ');
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo: function(str) {
    console.log(str)
    process.stdout.write('\nprompt > ');
  },
  cat: function(file) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("error: ", err)
      } else {
        console.log(data)
      }
      process.stdout.write('\nprompt > ');
    })
  },
  head: function(file) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("error: ", err)
      } else {
        let lines = data.split("\n").slice(0, 5).join("\n")
        console.log(lines)
      }
      process.stdout.write('\nprompt > ');
    })
  },
  tail: function(file){
    fs.readFile(file, "utf8", function(err, data){
      if(err){
        console.log("error: ", err)
      }else{
        let lines = data.split("\n").slice(-5).join("\n")
        console.log(lines)
      }
      process.stdout.write('\nprompt > ')
    })
  },
  wc: function(file) {
    fs.readFile(file, "utf8", function(err, data){
      if(err){
        console.log("error: ", err)
      }else {
        let lines = data.split("\n")
        console.log(lines.length)
      }
    })
  },
  uniq: function(file) {
    fs.readFile(file, "utf8", function(err, data){
      if(err){
        console.log("error: ", err)
      }else {
        let lines = data.split("\n")
        let uniqlines = lines.filter(function(line, i, arr) {
          return i === 0 || line !== arr[i-1]
        })
        console.log(uniqlines.join("\n"))
      }
    })
  }
}