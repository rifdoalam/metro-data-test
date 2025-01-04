"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("employee_family", [
      {
        employee_id: 1,
        name: "Siska Kurniawan",
        identifier: "",
        job: "Karyawan Swasta",
        place_of_birth: "Jakarta",
        date_of_birth: new Date("2001-09-01"),
        religion: "Islam",
        is_life: true,
        is_divorced: false,
        relation_status: "Istri",
        created_by: "John Doe",
        updated_by: "John Doe",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
