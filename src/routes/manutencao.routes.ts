import { Router } from 'express';
import { ManutencaoController } from '../controllers/manutencao.controller';

const router = Router();
const controller = new ManutencaoController();

router.get('/', async (req, res) => {
  try {
    await controller.listar(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar manutenções' });
  }
});

router.post('/', async (req, res) => {
  try {
    await controller.criar(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar manutenção' });
  }
});

export default router;
