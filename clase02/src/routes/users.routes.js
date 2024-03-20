import { Router } from 'express'
import { getUser, getUsers } from '../controllers/users.js'

const router = Router()

router.get('/', getUsers)

router.get('/', getUser)

router.post('/', (req, res) => {
  res.json('Crear usuario')
})

router.put('/', (req, res) => {
  res.json('Editar usuario')
})

router.delete('/', (req, res) => {
  res.json('Eliminar usuario')
})

export default router 