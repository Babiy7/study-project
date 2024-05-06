export function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
}
