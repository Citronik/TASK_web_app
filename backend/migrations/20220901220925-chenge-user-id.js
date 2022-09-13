'use strict';

const { DataTypes } = require("sequelize");
const { Sequelize, users } = require("../models/userModel");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'id', {
      type: DataTypes.UUID,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'id', {
      autoIncrement: true,
      type: DataTypes.INTEGER,
    })
  }
};
