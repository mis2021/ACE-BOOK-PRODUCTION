FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front

ARG USER=default
RUN adduser -D $USER
COPY . .

RUN yarn
RUN yarn build:gql
#RUN chown -R $USER:$USER /usr/src/app/acebook/front
RUN mkdir -p /usr/src/app/acebook/front/images
RUN mkdir -p /usr/src/app/acebook/front/files
RUN chmod 777 /usr/src/app/acebook/front/uploads/images;
RUN chmod 777 /usr/src/app/acebook/front/uploads/files;
EXPOSE 3000



CMD ["yarn", "start"]

#Chown Static Files

#RUN find /usr/src/app/acebook/front -type d -exec chmod 755 {} \;
#RUN find /usr/src/app/acebook/front -type f -exec chmod 644 {} \;
