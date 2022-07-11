FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front

ARG USER=default

COPY . .

RUN yarn
RUN yarn build:gql
RUN chown -R $USER:$USER /usr/src/app/acebook/front
RUN chmod 777 /usr/src/app/aZcebook/front;
EXPOSE 3000

RUN adduser -D $USER

CMD ["yarn", "start"]

#Chown Static Files

#RUN find /usr/src/app/acebook/front -type d -exec chmod 755 {} \;
#RUN find /usr/src/app/acebook/front -type f -exec chmod 644 {} \;
