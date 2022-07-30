FROM workspace as pruned
RUN pnpm --filter backend --prod deploy pruned

FROM node:16-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=pruned /app/pruned .

USER node

EXPOSE ${PORT}
ENV PORT ${PORT}

CMD ["node", "dist/main.js"]