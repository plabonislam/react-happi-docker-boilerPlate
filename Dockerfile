FROM node as builder

WORKDIR /app

COPY  my-app/package*.json ./

RUN npm i

COPY my-app/ .
ENV REACT_APP_PROD="production"


RUN npm run build



FROM node

WORKDIR /app

COPY  server/package*.json ./

RUN npm i

COPY server/ .

COPY --from=builder /app/build  /app/src/client


CMD [ "npm", "start" ]