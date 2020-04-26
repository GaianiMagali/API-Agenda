const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { persona } = require('./sequelize')

//Listar personas
app.get('/personas', (req, res) => {
    persona.findAll()
        .then(personas => {
            res.send(personas);
        })
})

//Crear persona
app.post('/personas/nuevo', (req, res) => {
    console.log(req.body)
    persona.create({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono
    }).then(persona => {
        res.send('Persona creada');
    })
})

//Mostrar
app.get('/personas/:id', (req, res) => {
    let personaId = req.params.id
    persona.findOne({
        where: { id: personaId }
    }).then(persona => {
        res.json(persona);
    })
})

//Update
app.put('/personas/:id', (req, res) => {
    let personaId = req.params.id
    let nuevosDatos = req.body
    persona.findOne({
        where: { id: personaId }
    }).then(persona => {
        persona.update(nuevosDatos)
        .then(nuevaPersona => {
            res.json(nuevaPersona)
        })
    })
})

//Delete
app.delete('/personas/:id', (req, res) => {
    let personaId = req.params.id
    persona.destroy({
        where: {id: personaId}
    }).then(() => {
        res.send('Persona eliminada')
    })
})

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))