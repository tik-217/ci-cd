FROM node:22.x

WORKDIR /app

COPY package.json ./

RUN npm ci

COPY . .

CMD [ "node", "app.js" ]

EXPOSE 3005