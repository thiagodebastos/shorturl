class UniqueConstraintError extends Error {
  constructor(value) {
    super(`${value} must be unique.`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError);
    }
  }
}

class RequiredParameterError extends Error {
  constructor(param) {
    super(`${param} can not be null or undefined.`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError);
    }
  }
}

class InvalidPropertyError extends Error {
  constructor(msg) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError);
    }
  }
}

function getErrorStatusCode({ error }) {
  return error instanceof UniqueConstraintError
    ? 409 // Conflict https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
    : error instanceof InvalidPropertyError ||
      error instanceof RequiredParameterError
    ? 400 // Bad Request https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
    : 500; // Internal Server Error https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
}

module.exports = {
  RequiredParameterError,
  InvalidPropertyError,
  UniqueConstraintError,
  getErrorStatusCode
};
