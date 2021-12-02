const fs = require('fs');
const request = require('request');
const argv = process.argv;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const print = (s) => console.log("Downloaded and saved " + s + " bytes to " + argv[3]);

request(argv[2], (error, response, body) => {
 
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    //console.log(!fs.existsSync(argv[3]));
  //    if(fs.existsSync(argv[3])){
  //    const answer = rl.question('File already exists Types y to overwrite?');
  //    console.log(answer);
  //    if (answer === 'y'){
  //   fileWrite(body);
  //   }
  //   rl.close();
    
  // } else {
    fileWrite(body);
  //}
  }
  rl.close();
});

const fileWrite =(body)=>{
  fs.writeFile(argv[3], body, err => {
    if (err) {
      console.error(err)
      return
    }
    fs.stat(argv[3], (err, stats) => {
      if (err) {
        console.error(err)
        return
      }

      print(stats.size);
    })

  });
  
}


