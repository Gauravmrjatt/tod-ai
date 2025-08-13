import axios from "axios";
const backendHost =
  process.env.NEXT_PUBLIC_ENV !== "test"
    ? "https://api.dream10.in"
    : process.env.NEXT_PUBLIC_API_URL;

// Configure axios defaults for CORS
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
export const loginUser = async (credentials) => {
  const response = await axios.post(
    `${backendHost}/api/auth/login`,
    credentials
  );
  return response.data;
};
export const signupUser = async (credentials) => {
  const response = await axios.post(
    `${backendHost}/api/auth/signup/parent`,
    credentials
  );
  return response.data;
};
export const getProfile = async ({ headers = {} }) => {
  const response = await axios.get(`${backendHost}/api/auth/parent-info`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
  return response.data;
};
export const getChild = async ({ headers = {} }) => {
  const response = await axios.get(`${backendHost}/api/auth/children`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
  return response.data;
};
export const getAdminGames = async ({ headers = {} }) => {
  const response = await axios.get(`${backendHost}/api/games/all`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
  return response.data;
};

export const createChild = async (payload, token) => {
  const response = await axios.post(`${backendHost}/api/auth/child`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const addGame = async (payload, token) => {
  const response = await axios.post(`${backendHost}/api/auth/child`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateParentProfile = async (payload, token) => {
  const response = await axios.put(`${backendHost}/api/auth/profile`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
