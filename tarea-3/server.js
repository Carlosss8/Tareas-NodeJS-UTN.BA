const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

app.use(express.json());

const connectMongoDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db_tarea_3")
        console.log('✅ Conexión a MongoDB establecida');

    } catch (error) {
        console.log(error.message)
        console.error('❌ Error al conectar a MongoDB:', error);
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

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    connectMongoDb()
})