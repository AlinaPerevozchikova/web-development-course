String.prototype.countCoincidence = function (substring) {
  let str = this;
  let pos = this.indexOf(substring);

  str = str.toLowerCase();
  substring = substring.toLowerCase();

  return str.split(substring).length - 1;
}