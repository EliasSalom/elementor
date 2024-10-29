FROM node:latest
WORKDIR /apps
COPY apps/album/package*.json ./


COPY apps/album ./

ARG PORT=5173

ENV PORT=$PORT
ENV VITE_BACKEND_URL="http://localhost:3000"

RUN npm i vite
RUN npm install
RUN npm install --save-dev @types/node

RUN npm run build

EXPOSE 5173:5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# docker build -t frontend -f docker/album.dockerfile .
# docker run -t frontend