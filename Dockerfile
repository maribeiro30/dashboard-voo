FROM node:carbon

RUN apt-get update \
  && apt-get install -y libaio1 \
  && apt-get install -y unzip


ADD ./src ./
ADD ./package*.json ./


RUN groupadd -r nodejs \
   && useradd -m -r -g nodejs nodejs

RUN npm_config_unsafe_perm=true npm i -g oracledb

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]
