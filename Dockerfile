FROM node:carbon

COPY package.json /tmp/package.json
RUN cd /tmp && npm install

WORKDIR /usr/src/app
RUN mkdir node_modules
RUN cp -a /tmp/node_modules ./

COPY . ./

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "server"]
