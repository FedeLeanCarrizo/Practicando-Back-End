const express = require('express')
const { router } = require('./routes/users.routes')

class Server {
  
  constructor() {
    this.app = express()

    this.routes()
  }

 routes() {

   this.app.use('/api', router)
 }
 
 listen() {
  this.app.listen(8000, () => {
    console.log('Servidor arriba en el puerto 8000')
  })
 }
}

module.exports = {
  Server,
}