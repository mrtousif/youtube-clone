FROM gitpod/workspace-full

RUN npm i --location=global @nestjs/cli tsx serve fkill-cli

# Install kubectl, k3d, tilt
RUN brew install fzf navi git-secret kubectl k3d starship dbmate

RUN eval "$(starship init bash)"
# k3d cluster create gitpod

# RUN curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash