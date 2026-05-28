import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();

      const alunosFormatados = alunos.map(aluno => {
        const { id, nome, sobrenome, email } = aluno;
        return { id, nome, sobrenome, email };
      });

      return res.json(alunosFormatados);

    } catch {
      return res.status(500).json({
        errors: 'Erro ao buscar alunos'
      });
    }
  }

  async show(req, res) {
    try{
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: 'ID não encontrado!'
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: 'Aluno não encontrado!'
        });
      }

      const { nome, sobrenome, email } = aluno;
      return res.json({ id, nome, sobrenome, email });

    } catch(e) {
      return res.status(400).json({
          errors: e.errors.map(err => err.message)
        });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email } = novoAluno;
      return res.json({ id, nome, sobrenome, email });

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async update(req, res) {
    try{
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: 'ID não encontrado!'
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: 'Aluno não encontrado!'
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      const { nome, sobrenome, email } = alunoAtualizado;
      return res.json({ id, nome, sobrenome, email });

    } catch(e) {
      return res.status(400).json({
          errors: e.errors.map(err => err.message)
        });
    }
  }

  async delete(req, res) {
    try{
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: 'ID não encontrado!'
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: 'Aluno não encontrado!'
        });
      }

      await aluno.destroy();

      return res.json({
        delete: true
      });

    } catch(e) {
      return res.status(400).json({
          errors: e.errors.map(err => err.message)
        });
    }
  }
}
export default new AlunoController();
