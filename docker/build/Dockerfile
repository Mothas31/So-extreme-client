# STEP 1 build static website
FROM node:10-alpine as builder
RUN apk update && apk add --no-cache make git
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN cd /app && npm set progress=false && npm install

# Copy project files into the docker image
COPY .  /app
ARG configuration=production
RUN cd /app && npm run build -- --configuration $configuration
RUN cd /app && npm run compodoc


# STEP 2 build server
FROM composer:1.7 as vendor

WORKDIR /workflow-server
COPY workflowSrv/  /workflow-server/
RUN cd /workflow-server

RUN composer install

# STEP 3 build a small nginx image with static website
FROM internalrepo-nexus.nside.local.com/nginxworkflow:1.5
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/soExtrem-client /var/workflow-app
COPY --from=builder /app/documentation /var/workflow-app/documentation
COPY --from=vendor /workflow-server/ /var/workflow-server
RUN chmod 777 -R /var/workflow-server
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]