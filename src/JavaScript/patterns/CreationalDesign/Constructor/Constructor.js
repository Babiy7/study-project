function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80`;
};

const aws = new Server('Amazon Web Services', '82.23.53.12');

console.log(aws.getUrl());
