const myLog = function(req, res, next) {
  console.log('LOGGED')
  next();
}

module.exports = {
  myLog
}