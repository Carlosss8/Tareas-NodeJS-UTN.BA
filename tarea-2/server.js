const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

let productos = [
    { id: '1', nombre: 'Computadora' },
    { id: '2', nombre: 'Celular' }
];

app.get('/', (req, res) => {
    res.json({
        mensaje: "Servidor funcionando"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.get('/productos/:id', (req, res) => {
    const producId = req.params.id;
    const productos = productos.find(u => u.id === producId);

    if (productos) {
        res.json(productos);
    } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
});

app.post('/productos', (req, res) => {
    const body = req.body
    const id = crypto.randomUUID()
    const newProduct = { id: id, nombre: body.nombre }
    productos.push(newProduct)

    res.status(201).json({
        mensaje: 'Producto creado correctamente',
    })
})

app.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { nombre } = req.body

    const producto = productos.find(p => p.id === id)

    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        })
    }

    if (nombre) producto.nombre = nombre

    res.json({
        mensaje: `Producto actualizado correctamente`,
        producto
    })
})

app.delete('/productos/:id', (req, res) => {
    const id = req.params.id
    const newProduct = productos.filter(p => p.id !== id)
    productos = newProduct

    res.json({
        mensaje: `Producto eliminado`
    })
})