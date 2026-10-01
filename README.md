# Lista de Compras — Vercel
Projeto pronto para Vercel com front-end responsivo, API, Postgres e Vercel Blob.

## Variáveis de ambiente
- `POSTGRES_URL`: conexão PostgreSQL (Neon/Vercel Postgres compatível)
- `BLOB_READ_WRITE_TOKEN`: token do Vercel Blob

## Deploy
1. Importe a pasta/repositório na Vercel.
2. Crie/conecte um banco Postgres e Vercel Blob.
3. Cadastre as duas variáveis acima.
4. Faça o deploy.

O navegador mantém apenas um cache local para uso imediato. O estado principal é sincronizado em `/api/state`. Encartes e ofertas ficam persistidos no servidor.

O parser incluído extrai PDFs com camada de texto. Encartes totalmente escaneados exigem OCR/visão no backend; a interface sinaliza erro/zero ofertas em vez de inventar preços.
