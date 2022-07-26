FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front
COPY . .

RUN yarn
RUN yarn build:gql
EXPOSE 3000

RUN chown -R www-data:www-data /var/www/sitename/public/uploads
RUN find /var/www/sitename/public/uploads -type f -exec chmod 644 {} \;
RUN find /var/www/sitename/public/uploads -type d -exec chmod 755 {} \;
# RUN chown -R www-data. /var/www/sitename/public/uploads

# RUN yarn build:gql
# RUN yarn start

CMD ["yarn", "start"]

