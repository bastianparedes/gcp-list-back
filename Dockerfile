ARG NODE_VERSION=22.14.0
ARG ALPINE_VERSION=3.20

FROM node:${NODE_VERSION}-alpine as builder

ARG NPM_USERNAME
ARG NPM_TOKEN
ENV CI=true

WORKDIR /app

RUN	echo "$NPM_USERNAME:$NPM_TOKEN" > /tmp/auth
RUN apk add --no-cache binutils=2.43.1-r2
RUN apk add --no-cache python3=3.12.10-r0
RUN apk add --no-cache make=4.4.1-r2
RUN apk add --no-cache g++=14.2.0-r4
RUN apk add --no-cache tini=0.19.0-r3

COPY . .

RUN npm ci --no-audit
RUN	npm run build


FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION}

COPY --from=builder /app/ ./

ENV PORT=3000
ENV NODE_ENV=production
ENV LOG_LEVEL=error
ENV MAX_EVENT_LOOP_DELAY=1000
ENV MAX_RSS_BYTES=0
ENV MAX_HEAP_USED_BYTES=0
ENV MAX_AGE=86400

EXPOSE $PORT

CMD ["npm", "run", "start"]

