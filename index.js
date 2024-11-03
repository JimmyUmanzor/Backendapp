const express = require('express');
const cors = require('cors'); // Importa cors
const Contacto = require('./Modelos/contacto');
const { where } = require('sequelize');

const app = express();


const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};
app.use(cors(corsOptions));

app.use(express.json());

app.get('/contacto', async (req, res) => {
    try {
        const contacto = await Contacto.findAll();
        res.status(200).json(contacto);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error' });
    }
});

app.post('/contacto', async (req, res) => {
    try {
        console.log(req.body);
        const contacto = await Contacto.create(req.body);
        res.status(200).json(contacto);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error: ' + error });
    }
});

app.put('/contacto/:id', async (req, res) => {
    try {
        const [updated] = await Contacto.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            res.status(200).json({ mensaje: 'Actualizado correctamente' });
        } else {
            res.status(400).json({ mensaje: 'No se actualizó' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error: ' + error });
    }
});

app.delete('/contacto/:id', async (req, res) => {
    try {
        const deleted = await Contacto.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).send();
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Contacto' });
    }
});

app.listen(5000, () => {
    console.log('Aplicación ejecutándose en el puerto 5000');
});
