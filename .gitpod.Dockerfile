FROM gitpod/workspace-full

RUN npm i --location=global pnpm @nestjs/cli dotenv-cli hasura-cli tsx serve fkill-cli

RUN brew install fzf navi git-secret kubectl kompose ffmpeg starship dbmate go-task/tap/go-task datawire/blackbird/telepresence
