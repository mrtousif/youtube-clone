import { AutoRc } from "auto";
import { IDockerPluginOptions  } from "@auto-it/docker";
import { IAllContributorsPluginOptions } from "@auto-it/all-contributors";


const allContributorsOptions: IAllContributorsPluginOptions = {
  types: {
    plugin: "**/plugin/**/*",
    code: ["**/src/**/*", "**/package.json", "**/tsconfig.json"],
  },
};

const dockerOptions: IDockerPluginOptions = {
    registry: "ghcr.io/my/app"
}

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    plugins: [
      "released",
      ["all-contributors", allContributorsOptions],
      ["docker", dockerOptions]
    ],
    labels: [
      {
        name: "blog-post",
        changelogTitle: "📚 Blog Post",
        releaseType: "none",
      },
    ],
  };
}