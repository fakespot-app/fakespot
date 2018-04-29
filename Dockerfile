FROM node:carbon

RUN apt-get update
RUN apt-get install apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install yarn

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn

WORKDIR /usr/src/app
RUN mkdir node_modules
RUN cp -a /tmp/node_modules ./

COPY . ./

RUN yarn build

EXPOSE 3000
CMD ["yarn", "run", "server"]
