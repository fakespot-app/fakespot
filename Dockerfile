FROM node:carbon
RUN npm install npm -g


COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm ci


WORKDIR /usr/src/app
RUN mkdir node_modules
RUN cp -a /tmp/node_modules ./

COPY . ./

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "server"]
