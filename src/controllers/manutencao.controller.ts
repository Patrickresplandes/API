import { Request, Response } from 'express';
import { ManutencaoService } from '../services/manutencao.services';
import { CreateManutencaoDTO } from '../dtos/manutencao.dto';

export class ManutencaoController {
  private service = new ManutencaoService();

  async listar(req: Request, res: Response) {
    const manutencoes = await this.service.listarTodos();
    return res.json(manutencoes);
  }

  async criar(req: Request, res: Response) {
    const dados: CreateManutencaoDTO = req.body;
    try {
      const nova = await this.service.criar(dados);
      return res.status(201).json(nova);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
