FROM node:20-alpine AS builder
WORKDIR /app
COPY apps/web/package*.json ./
RUN npm ci
COPY apps/web/tsconfig*.json ./
COPY apps/web/vite.config.ts ./vite.config.ts
COPY apps/web/index.html ./index.html
COPY apps/web/src ./src
ARG VITE_API_BASE_URL=http://localhost:3000
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ARG VITE_API_BASE_URL=http://localhost:3000
ENV NODE_ENV=production
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
