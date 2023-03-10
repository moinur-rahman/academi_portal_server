FROM node:18.13.0-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn tsc

CMD yarn start