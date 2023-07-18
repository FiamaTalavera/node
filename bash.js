// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  let dataToShow

  if(cmd === "pwd"){
    dataToShow = process.argv[1]
  }else if(cmd === "date"){
    dataToShow = new Date().toString()
  }else{
    dataToShow = `El comando ${cmd} no fue encontrado`
  }

  process.stdout.write(dataToShow);
  process.stdout.write('\nprompt > ');
});