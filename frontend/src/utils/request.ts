export const client = require('axios').default;
export const apiEndpoint = (endpoint: string): string => {
  return process.env.REACT_APP_API_BASE_URL + endpoint;
};
