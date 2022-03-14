FROM node:17-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn install --prod

EXPOSE 8000

CMD ["yarn", "start"]