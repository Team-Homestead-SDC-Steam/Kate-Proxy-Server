FROM node:12
WORKDIR /usr/src/app

ENV PORT=3000
ENV NODE_ENV=development

COPY package*.json ./
RUN npm install
# RUN npm ci --only=production
COPY . .
EXPOSE 3000
RUN npm run build:dev
CMD npm start
