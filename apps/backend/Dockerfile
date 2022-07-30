# ./docker/Dockerfile.node
# base node image

# base node image
# https://github.com/prisma/prisma/issues/861#issuecomment-881992292
FROM node:16-slim AS pnpm
ENV CI=1

ARG SCOPE
ENV SCOPE=${SCOPE}

ARG FOLDER
ENV FOLDER=${FOLDER}

ARG PORT
ENV PORT=${PORT}
ARG PNPM_VERSION=7.6.0

RUN apt-get update && apt-get install libssl-dev ca-certificates -y
RUN apt-get install -y openssl && apt-get install -y wget && apt-get install -y openssl git
RUN npm --no-update-notifier --no-fund --global install pnpm@${PNPM_VERSION}

ENV PRISMA_SKIP_POSTINSTALL_GENERATE=1

# Deps
FROM pnpm AS builder
WORKDIR /app

COPY . .

# Get the git head
RUN git rev-parse HEAD | cut -c1-7 > hash.txt

# Install everything
RUN pnpm install --no-frozen-lockfile
# Run prisma generate
RUN pnpm --filter=prisma run prisma:generate:docker
# Build the package
RUN pnpm run build -- --scope=${SCOPE}

# Copy the pnpm parser
COPY docker/.pnpmfile.cjs .pnpmfile.cjs

# Now bundle the
RUN pnpm i --filter ./${FOLDER} --virtual-store-dir ${FOLDER}/node_modules/.pnpm --prod --no-frozen-lockfile



# Production
FROM pnpm as production
WORKDIR /app
ENV NODE_ENV=production

HEALTHCHECK --interval=30s CMD node healthcheck.js

# Copy from the build artifacts and the locks and package.json, hash.txt.
COPY --from=builder /app/${FOLDER}/dist ./dist
COPY --from=builder /app/${FOLDER}/dist/public ./public
COPY --from=builder /app/${FOLDER}/package.json ./package.json
COPY --from=builder /app/${FOLDER}/node_modules ./node_modules

# Hash identity
COPY --from=builder /app/hash.txt ./hash.txt

USER node

EXPOSE ${PORT}
ENV PORT ${PORT}

CMD ["node", "dist/main.js"]