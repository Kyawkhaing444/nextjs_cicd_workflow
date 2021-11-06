FROM node:16-alpine as builder
WORKDIR '/app'

COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
