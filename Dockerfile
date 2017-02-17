FROM mhart/alpine-node:6.2.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm config set registry https://registry.npmjs.org/
RUN npm set progress=false
RUN npm install
RUN npm install -g gulp

# Bundle app source
COPY . /usr/src/app

EXPOSE 8000