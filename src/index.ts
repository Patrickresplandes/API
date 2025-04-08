import express from 'express';
import usuarioRoutes from './routes/manutencao.routes';

const app = express();
app.use(express.json());

app.use('/manutencao', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
