FROM node:12
WORKDIR /usr/src/class-node-api
COPY ./package.json .
RUN npm install --only=prod