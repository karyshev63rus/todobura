# BUILDER#
FROM node:14.18.1-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm run build

# FINAL #
FROM nginx:stable-alpine

COPY --from=build-stage /app/build /home/app/frontend/build