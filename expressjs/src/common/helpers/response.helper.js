//ko nen thay doi key
import { statusCodes } from "./status-code.helper.js";

//ko nen xoa 
export const responseSuccess = (data,message="OK",statusCode=statusCodes.OK) => {
    return {
        status:"success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc:"swagger.com"
    };
 };

 export const responseError = (message ="Internal Server Error",statusCode=statusCodes.INTERNAL_SERVER_ERROR,stack) => { 
    return {
        status:"error",
        statusCode: statusCode,
        message: message,
        stack: process.env.NODE_ENV === 'production' ? undefined : stack,
        doc: "swagger.com",
    };
  };