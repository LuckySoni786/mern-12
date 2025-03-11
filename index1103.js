// Types of Modules in Node.js

/*
1.) User Defined
2.) Built-in
*/

// --------built-in-------
// a.) os module (Operating System) 
// b.) path module 
// c.) fs module (file system)
// d.) http module (hyper text transfer protocol)


// ------os----------
// const os = require('os');

// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.machine());
// console.log(os.userInfo());
// console.log(os.userInfo().username);



// ------------path-------------
const { log } = require('console');
const path = require('path');

// console.log("directory name :", __dirname);
// console.log("file name :", __filename);

const filePath = path.join("folder", "subFolder", "data.txt");
// console.log(filePath);

const resolve = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath)
const dirname = path.dirname(filePath);

console.log({resolve,
     extname,
      basename,
       dirname});





