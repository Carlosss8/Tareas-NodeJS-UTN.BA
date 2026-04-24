const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

app.use(express.json());

const connectMongoDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db_tarea_3")
        console.log('Conexión a MongoDB establecida');

    } catch (error) {
        console.log(error.message)
        console.error('Error al conectar a MongoDB:', error);
    }
}

const clotheSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false }
}, {
    versionKey: false
})

const Clothes = mongoose.model("Clothes", clotheSchema)

app.get('/clothes', async (req, res) => {
    const clothes = await Clothes.find();
    res.json(clothes);
});

app.post('/clothes', async (req, res) => {
    const body = req.body;
    await Clothes.create({ name: body.name, price: body.price, description: body.description });
    res.json({ status: 'Indumentaria creada' });
});


app.get('/clothes/:id', async (req, res) => {
    const id = req.params.id;
    const clothes = await Clothes.findById(id);
    if (!clothes) return res.status(404).send('Indumentaria no encontrada');
    res.json(clothes);
});

app.put('/clothes/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const update = await Clothes.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    res.json({ status: 'Indumentaria actualizada', update });
});

app.delete('/clothes/:id', async (req, res) => {
    const id = req.params.id;
    await Clothes.findByIdAndDelete(id);
    res.json({ status: 'Tarea eliminada' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    connectMongoDb()
})