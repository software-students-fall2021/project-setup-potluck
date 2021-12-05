FROM node:14-slim
WORKDIR /front-end
# ENV PATH+"./node_modules/.bin:$PATH"
COPY package.json /front-end
RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]