// secretManagerModule.js

const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const dotenv = require('dotenv');
dotenv.config();

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;

// AWS kimlik bilgilerini ve bölgesini yapılandırma
const client = new SecretsManagerClient({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const getSecret = async (secretName) => {
  const command = new GetSecretValueCommand({
    SecretId: secretName,
    VersionStage: "AWSCURRENT",
  });

  try {
    const response = await client.send(command);
    const secret = JSON.parse(response.SecretString);
    for (const key in secret) {
        if (secret.hasOwnProperty(key)) {
          console.log(`${key}: ${secret[key]}`);
        }
      }//else {
      //throw new Error("İstenen anahtar ('key') secret içinde bulunamadı.");
    }
   catch (err) {
    throw err;
  }
};

module.exports = { getSecret };


