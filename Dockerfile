FROM node:12

WORKDIR /app/

COPY . /app/

RUN npm install
RUN npm run build

RUN rm -rf node_modules
RUN rm -rf src

CMD ls && npx http-server ./build -p 3000

EXPOSE 3000