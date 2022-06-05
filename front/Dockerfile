FROM node:16.13.0
WORKDIR /usr/src/app/acebook/front
COPY __generated__ ./
# COPY package*.json ./
COPY . .

RUN yarn
RUN yarn build:gql
EXPOSE 3001
# RUN yarn build:gql
# RUN yarn start

CMD ["yarn", "start"]
# CMD ["yarn", "build", "start:prod"]