FROM node:22-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npm install -g tsx

COPY . .

RUN npx prisma generate

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "const port=process.env.PORT||5000; require('http').get(`http://localhost:${port}`, (r) => {if(r.statusCode>=500)process.exit(1)}).on('error', () => process.exit(1))"

CMD ["tsx", "server.js"]
