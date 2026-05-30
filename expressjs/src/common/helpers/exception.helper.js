import { statusCodes } from "./status-code.helper.js";

// 4xx Client Error Exceptions

// 400: Bad Request
export class BadRequestException extends Error {
    code = statusCodes.BAD_REQUEST;
    name = "BadRequestException"
    constructor(message = "BadRequestException") {
        super(message)
    }
}

// 401: Unauthorized - quy định với FE là khi gặp thì logout
export class UnauthorizedException extends Error {
    code = statusCodes.UNAUTHORIZED;
    name = "UnauthorizedException"
    constructor(message = "UnauthorizedException") {
        super(message)
    }
}

// 403: Forbidden - quy định với FE là khi gặp thì gọi api refresh-token
export class ForbiddenException extends Error {
    code = statusCodes.FORBIDDEN;
    name = "ForbiddenException"
    constructor(message = "ForbiddenException") {
        super(message)
    }
}

// 404: Not Found
export class NotfoundException extends Error {
    code = statusCodes.NOT_FOUND;
    name = "NotfoundException"
    constructor(message = "NotfoundException") {
        super(message)
    }
}

// 405: Method Not Allowed
export class MethodNotAllowedException extends Error {
    code = statusCodes.METHOD_NOT_ALLOWED;
    name = "MethodNotAllowedException"
    constructor(message = "MethodNotAllowedException") {
        super(message)
    }
}

// 409: Conflict
export class ConflictException extends Error {
    code = statusCodes.CONFLICT;
    name = "ConflictException"
    constructor(message = "ConflictException") {
        super(message)
    }
}

// 422: Unprocessable Entity
export class UnprocessableEntityException extends Error {
    code = statusCodes.UNPROCESSABLE_ENTITY;
    name = "UnprocessableEntityException"
    constructor(message = "UnprocessableEntityException") {
        super(message)
    }
}

// 429: Too Many Requests
export class TooManyRequestsException extends Error {
    code = statusCodes.TOO_MANY_REQUESTS;
    name = "TooManyRequestsException"
    constructor(message = "TooManyRequestsException") {
        super(message)
    }
}

// 5xx Server Error Exceptions

// 500: Internal Server Error
export class InternalServerErrorException extends Error {
    code = statusCodes.INTERNAL_SERVER_ERROR;
    name = "InternalServerErrorException"
    constructor(message = "InternalServerErrorException") {
        super(message)
    }
}

// 501: Not Implemented
export class NotImplementedException extends Error {
    code = statusCodes.NOT_IMPLEMENTED;
    name = "NotImplementedException"
    constructor(message = "NotImplementedException") {
        super(message)
    }
}

// 502: Bad Gateway
export class BadGatewayException extends Error {
    code = statusCodes.BAD_GATEWAY;
    name = "BadGatewayException"
    constructor(message = "BadGatewayException") {
        super(message)
    }
}

// 503: Service Unavailable
export class ServiceUnavailableException extends Error {
    code = statusCodes.SERVICE_UNAVAILABLE;
    name = "ServiceUnavailableException"
    constructor(message = "ServiceUnavailableException") {
        super(message)
    }
}

// 504: Gateway Timeout
export class GatewayTimeoutException extends Error {
    code = statusCodes.GATEWAY_TIMEOUT;
    name = "GatewayTimeoutException"
    constructor(message = "GatewayTimeoutException") {
        super(message)
    }
}