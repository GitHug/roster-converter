FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["node", "dist/server.js"]

HEALTHCHECK --interval=5s --timeout=10s --start-period=5s --retries=3 CMD ["node", "dist/healthcheck.js"]
