/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: 'John',
          sobrenome: 'Doe',
          email: 'jhondoe@email.com',
          idade: 45,
          peso: 85,
          altura: 1.92,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Lucas',
          sobrenome: 'Silva',
          email: 'lucas.silva@email.com',
          idade: 22,
          peso: 75.5,
          altura: 1.78,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Mariana',
          sobrenome: 'Costa',
          email: 'mariana.costa@email.com',
          idade: 28,
          peso: 62.0,
          altura: 1.65,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Rafael',
          sobrenome: 'Souza',
          email: 'rafael.souza@email.com',
          idade: 35,
          peso: 88.2,
          altura: 1.80,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Beatriz',
          sobrenome: 'Almeida',
          email: 'beatriz.almeida@email.com',
          idade: 20,
          peso: 58.0,
          altura: 1.60,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Thiago',
          sobrenome: 'Pereira',
          email: 'thiago.pereira@email.com',
          idade: 31,
          peso: 90.0,
          altura: 1.85,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Juliana',
          sobrenome: 'Ribeiro',
          email: 'juliana.ribeiro@email.com',
          idade: 26,
          peso: 65.4,
          altura: 1.70,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Felipe',
          sobrenome: 'Martins',
          email: 'felipe.martins@email.com',
          idade: 24,
          peso: 82.1,
          altura: 1.76,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Camila',
          sobrenome: 'Oliveira',
          email: 'camila.oliveira@email.com',
          idade: 29,
          peso: 60.5,
          altura: 1.68,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {});
  },

  async down () {
    }
};
