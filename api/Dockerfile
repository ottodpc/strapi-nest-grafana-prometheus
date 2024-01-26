FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --only=production 

COPY . .
RUN npm run build

EXPOSE 3000

# CMD [ "npm", "run", "start:test" ]
# PM2
RUN npm install --only=production pm2 -g
CMD [ "pm2-runtime", "dist/main.js", "-i max" ]