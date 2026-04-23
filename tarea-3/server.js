import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

const connectMongoDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db_tarea_3")
    } catch (error) {
        console.log(error.message)
    }
}

const clotheSchema = new

    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`)
        connectMongoDb()
    })