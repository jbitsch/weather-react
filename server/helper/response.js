const res = {
  sendResponse: function (res, response, status) {
    const responseString = JSON.stringify(response);
    const responseStatus = (status) ? status : 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(responseStatus);
    res.end(responseString);
  },
  notFound: function (res) {
    this.sendResponse(res, {
      message: "invalid Request"
    }, 404);
  },
  notAuthenticated: function (res) {
    this.sendResponse(res, {
      message : "Not authorized"
    }, 401)
  },
  serverError: function (res, message) {
    this.sendResponse(res, {
      message: message
    }, 500);
  },
  validationError: function (res, message) {
    this.sendResponse(res, {
      message: message
    }, 400);
  }
}

module.exports = res;