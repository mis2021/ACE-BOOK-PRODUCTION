FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front

ARG USER=default
RUN adduser -D $USER
COPY . .

RUN yarn
RUN yarn build:gql


RUN chmod 777 /usr/src/app/acebook/front

WORKDIR /usr/src/app/acebook/front/public/uploads2/images
WORKDIR /usr/src/app/acebook/front/public/uploads2/files
RUN chmod 777 /usr/src/app/acebook/front/public/uploads2/images
RUN chmod 777 /usr/src/app/acebook/front/public/uploads2/files


EXPOSE 3000


CMD ["yarn", "start"]

