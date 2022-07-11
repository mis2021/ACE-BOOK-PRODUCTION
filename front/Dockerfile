FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front

ARG USER=default

COPY . .

RUN yarn
RUN yarn build:gql
EXPOSE 3000

RUN adduser -D $USER

CMD ["yarn", "start"]

#Chown Static Files
RUN chown -R $USER:$USER /usr/src/app/acebook/front
RUN find /usr/src/app/acebook/front -type d -exec chmod 755 {} \;
RUN find /usr/src/app/acebook/front -type f -exec chmod 644 {} \;