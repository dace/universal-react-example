import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../webpack.config.dev";

const server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
});

server.listen(8080, "localhost", function() {});
