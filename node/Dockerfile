FROM node:18-alpine

USER node

WORKDIR /home/node/app

COPY ./src /home/node/app
COPY package.json /home/node/app

EXPOSE 3000

RUN npm i

CMD [ "npm", "run", "start:dev" ]