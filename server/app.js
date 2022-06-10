require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { quest } = require('./db/models');
const { theme } = require('./db/models');

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/themes', async (req, res) => {
  const themes = await theme.findAll({ include: [{ model: quest }] });
  res.json({ themes });
});

app.get('/checkAnswer/:id', async (req, res) => {
  console.log('!!!!!!!!!!!!!!!');
  console.log(req.params.id)
  const answer = await quest.findOne({ where: { id: req.params.id } });
  console.log(answer);
  res.json({ answer });
});

app.listen(process.env.PORT ?? 3001, () => console.log('Сервер запущен', process.env.PORT));
