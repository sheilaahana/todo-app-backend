const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_complete: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  tableName: 'todo_items',
  timestamps: false
});

module.exports = Todo;