class HttpError extends Error {
    constructor(message, errorcode) {
        super(message);
        this.code = error.code
    }
}

module.exports = HttpError;