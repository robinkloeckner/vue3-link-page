const apiConfig = {
  baseApiUrl: "https://yourdomain.com/api/",
  headers: {},
  endpoints: {
    postContactForm: {
      path: "contact",
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    }
  }
};

export default apiConfig;