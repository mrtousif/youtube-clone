FROM node:16-alpine AS baseImage
ARG PNPM_VERSION=7.16.1
ARG SERVICE_PATH
ARG PACKAGE_NAME

# Install package manager
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    npm i --global --no-update-notifier --no-fund pnpm@${PNPM_VERSION}

# Use the node user from the image (instead of the root user)
USER node

# Get all dependencies and install
FROM baseImage AS dependencies

WORKDIR /usr/app

COPY --chown=node:node pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY --chown=node:node ${SERVICE_PATH}/package.json ./${SERVICE_PATH}/package.json

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile --filter ${PACKAGE_NAME}\
    | grep -v "cross-device link not permitted\|Falling back to copying packages from store"

# Build application using all dependencies, copy necessary files
FROM dependencies AS build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app/${SERVICE_PATH}

COPY --chown=node:node ${SERVICE_PATH} ./

RUN pnpm build
RUN rm -rf node_modules src \
    && pnpm -r exec -- rm -rf node_modules

# Use base image for correct context, get built files from build stage
# Install only production dependencies
FROM baseImage AS deploy

WORKDIR /usr/app

ENV NODE_ENV production

COPY --chown=node:node --from=build /usr/app .
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile --filter ${PACKAGE_NAME} --prod \
    | grep -v "cross-device link not permitted\|Falling back to copying packages from store"

ENV EXEC_PATH=${SERVICE_PATH}/dist/main.js

CMD node ${EXEC_PATH}
