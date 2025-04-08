# Etapa 1: builder
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

# Copia os arquivos de dependência primeiro
COPY package*.json ./
RUN npm install

# Copia todo o restante do código
COPY . .

# Gera o Prisma Client após copiar schema
RUN npx prisma generate

# Etapa 2: runner de desenvolvimento
FROM node:20-slim

WORKDIR /app

# Copia tudo da etapa anterior, inclusive node_modules e client gerado
COPY --from=builder /app /app

# Expõe porta para desenvolvimento
EXPOSE 3000

CMD ["npm", "run", "dev"]
