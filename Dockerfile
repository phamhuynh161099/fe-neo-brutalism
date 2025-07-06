FROM node:22 as base

FROM base as deps

WORKDIR /app

COPY package.json ./
RUN npm install


FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:22-alpine as runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static


EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]