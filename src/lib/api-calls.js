import axios from 'axios';
const backendHost = (process.env.NEXT_PUBLIC_ENV !== "test") ? "https://api.dream10.in" : process.env.NEXT_PUBLIC_API_URL
export const loginUser = async (credentials) => {
    const response = await axios.post(
        `${backendHost}/api/v1/auth/login`,
        credentials
    );
    return response.data;
};
export const signupUser = async (credentials) => {
    const response = await axios.post(
        `${backendHost}/api/v1/auth/register`,
        credentials
    );
    return response.data;
};