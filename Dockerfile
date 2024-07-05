#Base image to use for building and installing
FROM node:20.15.0-alpine as base
USER node
WORKDIR /home/node
EXPOSE 8080
ENV NODE_ENV=production

#Build the client
#This will install packages first to optimize layers. i.e. if the package.json file doesn't change, then it won't have to reinstall
FROM base as client
USER root
WORKDIR client
COPY ./client/package.json ./client/package-lock.json ./
RUN chown node:node package.json package-lock.json ./
RUN npm install
COPY ./client ./
RUN npm run build \
    && chown node:node ./ \
    && chown -R node:node ./build

#Setup the server dependencies
#This will install packages first to optimize layers. i.e. if the package.json file doesn't change, then it won't have to reinstall
FROM base as server
USER root
WORKDIR server
COPY ./server/package.json ./server/package-lock.json ./
RUN chown node:node package.json package-lock.json ./
USER node

RUN npm install --only=prod \
    && npm cache clean --force \
    && npm cache verify

USER root
COPY ./server ./temp/
RUN chown -R node:node ./temp \
  && rm -rf ./temp/node_modules \
  && mv ./temp/* ./  \
  && rm -rf ./temp

#Setup the server image (keep layers as small as possible)
FROM base
COPY --from=client /home/node/client/build /home/node/client
COPY --from=server /home/node/server /home/node
CMD [ "npm", "start" ]



