# ---- Base Node ----
FROM alpine:3.5 AS base
# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/web
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY . .
COPY package.json .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Test ----
# run linters and tests
FROM dependencies AS test
COPY . .
# RUN  npm run lint && npm run setup && npm run test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/web/node_modules ./node_modules
# copy app sources
COPY . .

# expose port and define CMD
EXPOSE 8080
CMD npm run dev