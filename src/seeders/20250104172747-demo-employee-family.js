"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("employee_family", [
      {
        employee_id: 1,
        name: "Marni",
        identifier: "3219900123121",
        job: "Ibu Rumah Tangga",
        place_of_birth: "Denpasar",
        date_of_birth: "1995-10-17",
        religion: "Islam",
        is_life: true,
        is_divorced: false,
        relation_status: "Istri",
        created_by: "admin",
        updated_by: "admin",
      },
      {
        employee_id: 1,
        name: "Clara",
        identifier: "3219900123122",
        job: "Pelajar",
        place_of_birth: "Bangkalan",
        date_of_birth: "2008-10-17",
        religion: "Islam",
        is_life: true,
        is_divorced: false,
        relation_status: "Anak",
        created_by: "admin",
        updated_by: "admin",
      },
      {
        employee_id: 1,
        name: "Stephanie",
        identifier: "3219900123123",
        job: "Pelajar",
        place_of_birth: "Bangkalan",
        date_of_birth: "2008-10-17",
        religion: "Islam",
        is_life: true,
        is_divorced: false,
        relation_status: "Anak",
        created_by: "admin",
        updated_by: "admin",
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
