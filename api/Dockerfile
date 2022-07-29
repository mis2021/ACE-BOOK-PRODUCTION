FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/api
COPY package*.json ./
COPY . .

RUN yarn

RUN yarn build
EXPOSE 4000
# RUN yarn build:gql
# RUN yarn start

CMD ["yarn", "start:prod"]
# CMD ["yarn", "build", "start:prod"]