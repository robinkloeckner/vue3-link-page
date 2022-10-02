import apiConfig from "../config/api.js";

const api = async (ep, data) => {
  const endpoint = apiConfig.endpoints[ep];

  const options = {};
  options.method = endpoint.method;
  options.headers = Object.assign({}, apiConfig.headers, endpoint.headers);

  if (endpoint.method.toUpperCase() !== "GET") {
    options.body = JSON.stringify(data);
  }

  let httpStatus = null;
  await fetch(apiConfig.baseApiUrl + endpoint.path, options)
    .then((response) => {
      httpStatus = response.status.toString();
    })
    .catch((error) => {
      console.error(error);
      httpStatus = "Error";
    });

  return httpStatus;
};

export default api;