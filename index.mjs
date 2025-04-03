import { createServer } from 'http';

import  Sequelize from 'sequelize';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
});


const sequelize = new Sequelize(
    process.env.DB_NAME,    
    process.env.DB_USER,    
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST, 
        port: 5432,
        dialect: 'postgres'
    }
);

sequelize.authenticate()
    .then(() => console.log('✅ Conectado com sucesso ao PostgreSQL!'))
    .catch(err => console.log('❌ Falha ao conectar: ' + err));


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serve is running on port ${PORT}`);
});
