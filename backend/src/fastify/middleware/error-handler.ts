import { FastifyInstance } from "fastify";
import { ErrorCode, ErrorMessage } from "../../types/error-code.js";

type ErrorHandler = Parameters<FastifyInstance["setErrorHandler"]>[0];

export const errorHandler: ErrorHandler = async (error, request, reply) => {
  request.log.error(error);

  // Mask errors as unknown error.
  return reply.code(500).send({
    code: ErrorCode.UNEXPECTED,
    message: ErrorMessage[ErrorCode.UNEXPECTED],
  });
};
