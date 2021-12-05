FROM node:14.18.2
WORKDIR /back-end
COPY package.json /back-end
RUN npm install
COPY ./back-end

#COPY . .

EXPOSE 5000
CMD ["npm", "run", "dev"]