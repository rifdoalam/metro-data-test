"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "education",
      [
        {
          employee_id: 1,
          name: "SMKN 7 Jakarta",
          level: "Sma",
          description: "Sekolah Menengah Atas",
          created_by: "admin",
          updated_by: "admin",
        },
        {
          employee_id: 2,
          name: "Universitas Negri Jakarta",
          level: "Strata 1",
          description: "Sarjana",
          created_by: "admin",
          updated_by: "admin",
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("education", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
