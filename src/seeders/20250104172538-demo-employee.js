"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "employee",
      [
        {
          nik: "11012",
          name: "Budi",
          is_active: true,
          start_date: "2022-12-12",
          end_date: "2029-12-12",
          created_by: "admin",
          updated_by: "admin",
        },
        {
          nik: "11013",
          name: "Jarot",
          is_active: true,
          start_date: "2021-09-01",
          end_date: "2028-09-01",
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
    await queryInterface.bulkDelete("employee", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
