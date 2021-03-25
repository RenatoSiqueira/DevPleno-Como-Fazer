const api = require('../api')

const novaForm = async (req, res) => {
  const categorias = await api.list('categorias')
  res.render('categorias/nova', { categorias })
}

const nova = async (req, res) => {
  await api.create('categorias', { categoria: req.body.categoria })
  res.redirect('/categorias')
}

const list = async (req, res) => {
  const categorias = await api.list('categorias')
  res.render('categorias/index', { categorias })
}

const excluir = async (req, res) => {
  await api.apagar('categorias', req.params.id)
  await api.apagar('publicacoes', req.params.id)
  res.redirect('/categorias')
}

const editarForm = async (req, res) => {
  const categorias = await api.list('categorias')
  const categoria = await api.get('categorias', req.params.id)
  res.render('categorias/editar', { categoria, categorias })
}

const editar = async (req, res) => {
  await api.update('categorias', req.params.id, {
    categoria: req.body.categoria
  })
  res.redirect('/categorias')
}

module.exports = {
  novaForm,
  nova,
  list,
  excluir,
  editarForm,
  editar
}