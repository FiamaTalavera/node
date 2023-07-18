process.stdout.write('prompt > ')

const commands = require("./commands")

process.stdin.on('data', function (data) {
  let cmd = data.toString().trim().split(" ")
  let commandName = cmd[0]
  let arg = cmd.slice(1)
  let argStr = arg.join(" ")
  commands[commandName](argStr)

  // if (cmd === "pwd") {
  //   commands.pwd()
  // } else if (cmd === "date"){
  //   commands.date()
  // } else if (cmd === "ls"){
  //   commands.ls()
  // } else if (cmd.includes("echo")){
  //   commands.echo(cmd)
  // }else {
  //   process.stdout.write('You typed: ' + cmd)
  //   process.stdout.write('\nprompt > ')
  // }
});