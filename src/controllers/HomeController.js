import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
  const novoAluno = await Aluno.create({
    nome: 'Igor',
    sobrenome: 'Sampaio',
    email: 'isampaiodequeiroz@gmail.com',
    idade: 34,
    peso: 93.4,
    altura:1.77
  });
    res.json(novoAluno);
  }
}

export default new HomeController();
