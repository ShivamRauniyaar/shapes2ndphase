import axios from 'axios';
import { getToken } from './Auth';
const Axios = axios.create();

Axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } else {
      return config;
    }
  },
  (Err) => {
    return Promise.reject(Err);
  },
);

/** ==========================Intercepter for Etag Caching=====================================  */

// let etagCache = {}; // Store ETag values for each URL

// Axios.interceptors.request.use(
//   (config) => {
//      
//     const token = getToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     // Include ETag header from cache if available
//     if (etagCache[config.url]) {
//       config.headers['If-None-Match'] = etagCache[config.url];
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Axios.interceptors.response.use(
//   (response) => {
//     // Check if the response contains an ETag header
//     const eTag = response.headers['etag'];
//     if (eTag) {
//       // Store ETag value in cache
//       etagCache[response.config.url] = eTag;
//     }

//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       // Handle 304 Not Modified response
//       if (error.response.status === 304) {
//         // Use cached data since the resource hasn't changed
//         const cachedResponse = error.response.config.cachedResponse;
//         return Promise.resolve(cachedResponse);
//       }

//       // Handle other error responses
//       // ...

//       return Promise.reject(error);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

/** ========================================END================================================ */

Axios.interceptors.response.use(
  (res) => res,
  async (err) => {

    return Promise.reject(err);
  }
);


interface ErrorResponse {
  error: boolean;
  message: string;
}

export const handelError = (Err: unknown): ErrorResponse => {
  let errMsg = 'Something Went Wrong';
  if (Err && (Err as { message?: string }).message) {
    errMsg = (Err as { message: string }).message;
  }
  return {
    error: true,
    message: errMsg,
  };
};

export const header = {
  headers: {
    'content-type': `application/json`,
  },
};

export default Axios;
