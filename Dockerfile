# Stage 1 — Build React client
FROM node:18-alpine AS client-build

WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Stage 2 — Build backend and serve client
FROM node:18-alpine

WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .

# Copy built client files into backend's public directory
COPY --from=client-build /app/client/dist ./public

# Expose server port
EXPOSE 5000

# Start backend
CMD ["npm", "start"]
