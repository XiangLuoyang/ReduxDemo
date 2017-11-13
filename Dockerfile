FROM node:4.6.2
RUN mkdir  /runDocker
WORKDIR /runDocker
COPY . /runDocker
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]