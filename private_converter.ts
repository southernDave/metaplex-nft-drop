const bs58 = require('bs58')
const fs = require("fs")
require("dotenv")

const private_key = process.env.PRIVATE_KEY

//converts the private key to bs58
const bytes = bs58.decode(private_key)

// the array that will contain the numbers array of numbers that have been converted
const byteList: number[] = []

// loop through the array of numbers and push to the array
for (let byte of bytes){
    byteList.push(byte)
}

//rather than manually creating the wallet.jsson file, I used the fs system to create a file after the
// code runs
fs.writeFile("./wallet.json", JSON.stringify(byteList), (err) => {
    if (err) { console.error(); return}
    console.log("your file system wallet has been created");
    
})