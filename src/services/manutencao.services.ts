import { prisma } from '../../prisma/client';
import { CreateManutencaoDTO } from '../dtos/manutencao.dto';

export class ManutencaoService {
  async listarTodos() {
    return prisma.manutencao.findMany();
  }

  async criar(data: CreateManutencaoDTO) {
    return prisma.manutencao.create({ data });
  }
}
