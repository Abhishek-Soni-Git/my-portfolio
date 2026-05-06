# Stage 1 — Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Build time variables
ARG VITE_APP_NAME
ARG VITE_APP_ENV
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_ENV=$VITE_APP_ENV

COPY package*.json ./

# --omit=dev mat karo — vite devDependency hai
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — Production Stage
FROM node:18-alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN npm install -g serve

COPY --from=builder --chown=appuser:appgroup /app/dist ./dist

USER appuser

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]