FROM node:16.13.0
COPY . .
RUN yarn
RUN yarn build
RUN yarn start:prod

CMD ["yarn", "build", "start:prod"]