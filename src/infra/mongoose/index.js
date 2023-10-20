const mongoose = require('mongoose');

const connection = (connectionString) => {
  mongoose.connect(connectionString).then(() => {
    console.log('Banco de dados MongoDB conectado')
  }).catch((error) => {
    console.log(`Banco não conectado, ${error}`)
  }) 
}
module.exports = connection;