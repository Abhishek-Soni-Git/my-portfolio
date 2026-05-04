FROM node:18

WORKDIR /app

# Create user
RUN groupadd appgroup && useradd -g appgroup -m appuser

# Copy package files
COPY package*.json ./

# Install as ROOT (IMPORTANT)
RUN npm install

# Copy code
COPY . .

# Fix permissions
RUN chown -R appuser:appgroup /app

# Switch user
USER appuser

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]

