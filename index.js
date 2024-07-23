const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Todo = require('./models/todo');
require('dotenv').config();

const app = express();

// Handle Error Cors for local development
app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());

sequelize.sync().then(() => console.log('Database synced'));

app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.findAll({
        order: [
          ['id', 'DESC']
        ]
      });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: 'Todo Not Found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const [updated] = await Todo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTodo = await Todo.findByPk(req.params.id);
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ error: 'Todo Not Found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.put('/api/todos/toggle/:id', async (req, res) => {
    try {

      const oldTodo = await Todo.findByPk(req.params.id);
      const isComplete = oldTodo.is_complete === 0 ? 1 : 0;

      const [updated] = await Todo.update({
        is_complete : isComplete
      }, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedTodo = await Todo.findByPk(req.params.id);
        res.status(200).json(updatedTodo);
      } else {
        res.status(404).json({ error: 'Todo Not Found' });
      }
    } catch (error) {
      res.status(400).json({ error});
    }
  });

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const deleted = await Todo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Todo Not Found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
