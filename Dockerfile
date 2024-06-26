
# Use the official Node.js 22.3.0 image as a base
FROM node:22.3.0 as base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) for the root directory
COPY package*.json ./

# Install dependencies in the root directory
RUN npm install

# Copy the entire client directory to the container
COPY client/ ./client/

# Install client dependencies and build the React app
WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

# Change back to the root directory
WORKDIR /usr/src/app

# Copy the rest of the server code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "server.js"]
