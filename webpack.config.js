const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { LimitChunkCountPlugin } = require("webpack").optimize;
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
/*
Active https: https://stackoverflow.com/questions/26663404/webpack-dev-server-running-on-https-web-sockets-secure
*/
module.exports = (env2, options) => {

  const env = dotenv.config().parsed; 

  const configuracion = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    fallback: {
      util:  require.resolve("util"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      buffer: require.resolve("buffer"),    
      crypto: false, 
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },   
  plugins: [
    new ModuleFederationPlugin({
      name: "syscontext",
      filename: "remoteEntry.js",
      remotes: {
        
      },
      exposes: {        
        "./usercontext": "./src/context/UserContext",  
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),//new LimitChunkCountPlugin({maxChunks: 1,    }), 
    new webpack.DefinePlugin( {configuracionGlobal:{
      apiKey: JSON.stringify(env["apiKey"]),
      authority: JSON.stringify(env["authority"]),
      knownAuthorities: JSON.stringify(env["knownAuthorities"]),
      cacheLocation: JSON.stringify(env["cacheLocation"]),
      clientSecret:  JSON.stringify(env["clientSecret"]),
    }
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
    }),
  ],
}
if (options.mode != 'production') {
          configuracion.devServer = {
                                  https: {
                                    key: fs.readFileSync("cert.key"),
                                    cert: fs.readFileSync("cert.crt"),
                                    ca: fs.readFileSync("ca.crt"),
                                  },
                                  historyApiFallback: true,
                                  port: 443,
                                  disableHostCheck: true,
                                }
                    }

  return configuracion;
};