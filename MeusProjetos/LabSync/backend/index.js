const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importação do CORS
const { Patient } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());  // Configuração do CORS

// Rotas...


// Rota para criar um novo paciente
app.post('/patients', async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para listar todos os pacientes
app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para obter um paciente pelo ID
app.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            res.status(200).json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para atualizar um paciente pelo ID
app.put('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.update(req.body);
            res.status(200).json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para deletar um paciente pelo ID
app.delete('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

