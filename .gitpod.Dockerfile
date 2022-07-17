FROM gitpod/workspace-node-lts

RUN npm i --location=global pnpm @nestjs/cli dotenv-cli hasura-cli tsx serve fkill-cli

# RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install kubectl, k3d, tilt
# RUN brew install fzf navi git-secret kubectl k3d starship dbmate go-task/tap/go-task

# k3d cluster create gitpod

# RUN curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash