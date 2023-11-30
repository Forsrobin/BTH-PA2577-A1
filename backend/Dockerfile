
FROM node:alpine 
# Create app directory 
WORKDIR /usr/src/app/server

COPY . .
RUN yarn install
WORKDIR /usr/src/app/server

RUN yarn global add ts-node

CMD [ "yarn", "start" ]