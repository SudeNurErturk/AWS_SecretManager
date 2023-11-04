const awsSM = require("./secretManager");

const secretKey = "test/app"

var test = awsSM.getSecret(secretKey)

console.log(test)

