FROM node:18-alpine

USER node

WORKDIR /home/node/app

COPY . .

EXPOSE 3000

RUN npm i

CMD [ "npm", "run", "start:dev" ]