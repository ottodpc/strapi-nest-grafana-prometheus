FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --only=production 
RUN npm i -D @swc/cli @swc/core
RUN npm i -g @nestjs/cli

COPY . .
RUN npm run build

EXPOSE 3000

# CMD [ "npm", "run", "start:test" ]
# PM2
RUN npm install --only=production pm2 -g
CMD [ "pm2-runtime", "dist/main.js", "-i max" ]