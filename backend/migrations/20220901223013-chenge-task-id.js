'use strict';

const { DataTypes } = require("sequelize");
const { Sequelize, task } = require("../models/taskModel");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('tasks', 'id', {
      type: DataTypes.UUID,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tasks', 'id', {
      autoIncrement: true,
      type: DataTypes.INTEGER,
    })
  }
};
