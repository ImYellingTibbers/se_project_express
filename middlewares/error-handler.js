module.exports = (err, req, res, next) => {
  console.error(err.stack || err.message);

  const { statusCode = 500, message = 'Internal Server Error' } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'Something went wrong on the server' : message,
  });
};
