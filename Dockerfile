FROM nginx:latest

WORKDIR /blog

RUN apt update
RUN apt -y install npm
RUN npm install --global yarn

COPY package.json ./package.json
RUN yarn install

COPY nginx.conf /etc/nginx/conf.d/blog.conf

COPY docs ./docs
RUN yarn run docs:build
