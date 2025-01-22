FROM gitpod/workspace-full

RUN npm i --location=global pnpm @nestjs/cli dotenv-cli tsx serve fkill-cli devspace npm-check-updates

RUN brew install fzf navi kubectl starship dbmate go-task/tap/go-task datawire/blackbird/telepresence
