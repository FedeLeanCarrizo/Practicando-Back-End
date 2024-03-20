const getUsers = (req, res) => {
  res.json('Obtuviste los usuarios')
}

const createUser = (req, res) => {
  res.json('Creaste un usuario')
}

const editUser = ( req, res) => {
  res.json('Edetaste un usuario')
}

module.exports = {
  getUsers,
  createUser,
  editUser
}