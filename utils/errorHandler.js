module.exports = (res, error, codeError = 500) => {
  res.status(codeError).json({
    success: false,
    message: error.message ? error.message : error
  })
};
