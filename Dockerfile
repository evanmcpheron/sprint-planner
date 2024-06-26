# Use a node base image
FROM node:18-alpine AS build

# Set working directory for the root
WORKDIR /app

# Copy root package.json and package-lock.json
COPY package*.json ./

# Install root dependencies
RUN npm install

# Set working directory for the client app
WORKDIR /app/client

# Copy client package.json and package-lock.json
COPY client/package*.json ./

# Install client dependencies
RUN npm install
ENV NODE_ENV=production
# Build the React app
RUN npm run build

# Move back to the root working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]

