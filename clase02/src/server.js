import express from 'express'

export class Server {

  constructor() {
    this.app = express()

    this.routes()
  }

  routes() {
    this.app.use('/api/users', userRoutes)

  }

  listen() {
    this.app.listen(8000, () => {
      console.log('Servidor corriendo en el puerto 8000')
    })
  }
}