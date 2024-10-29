FROM node:latest
WORKDIR /apps
COPY apps/server/package*.json ./

COPY apps/server ./

ARG PORT=3000
ENV PORT=$PORT
ENV DATABASE_URL="mongodb+srv://test:123@cluster0.id10m.mongodb.net/test"

RUN npm install
RUN npm install --save-dev @types/node

RUN npx prisma generate
RUN npm run build

EXPOSE 3000:3000

CMD ["npm", "run", "start"]

# docker build -t server -f docker/server.dockerfile .
# docker run -p 3000:3000 -t server