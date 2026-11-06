ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS dev

#Set working directory inside the container
WORKDIR /workspace

#Expose the port the app runs on
EXPOSE 5173

#Keep the container running indefinitely to allow for development and debugging
CMD ["sleep", "infinity"]