const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
        nome: 'John Doe',
        email: 'jhon@email.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        nome: 'John Snow',
        email: 'jhonsnow@email.com',
        password_hash: await bcryptjs.hash('67548394', 8),
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        nome: 'Luiz',
        email: 'luiz@email.com',
        password_hash: await bcryptjs.hash('02574383', 8),
        created_at: new Date(),
        updated_at: new Date()
        }
      ],
      {});
  },

  async down () {
    }
};
