FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

# Install http-server

RUN npm install -g http-server

EXPOSE 3000

CMD http-server dist -p 3000 &




