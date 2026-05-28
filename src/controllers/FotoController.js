import multer from 'multer';
import multerConfig from '../config/multerConfig';
const upload = multer(multerConfig).single('foto');

import Foto from '../models/Foto';

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(400).json({
          errors: [err.code]
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ aluno_id, originalname, filename });
  
        return res.json(foto);

      } catch {
        return res.status(400).json({
          errors: 'Aluno não cadastrado!'
        });
      }

    });
  }
}

export default new FotoController();
