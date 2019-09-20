FROM node:10
WORKDIR /app
COPY package.json package-lock.json /app/
RUN cd /app && npm set progress=false && npm install
# Copy project files into the docker image 
COPY .  /app
RUN cd /app && export IP=127.0.0.1 && npm run test-ci && npm config set soExtrem-client:sonar_login fe498d15f561d7a4791587035f08a9185e03d63c && npm run sonar-scanner