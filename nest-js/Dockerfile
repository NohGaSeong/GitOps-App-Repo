FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]