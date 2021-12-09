FROM node:14-slim
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm config set unsafe-perm true 
RUN npm install --development --silent && mv node_modules ../
RUN npm install --global nodemon 
RUN npm install --global babel-cli
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]