// refreshToken.js

import { getToken } from './getToken';
import axios from 'axios';

export async function refreshToken() {
  try {
    const refreshToken = await getToken('refreshToken');
    const response = await axios.post('http://localhost:8000/token/refresh/', {
      refresh: refreshToken,
    });

    // Create a new token object
    const newTokens = {
      accessToken: response.data.access,
      refreshToken: response.data.refresh,
    };

    // Store the new tokens in session storage
    sessionStorage.setItem('accessToken', newTokens.accessToken);
    sessionStorage.setItem('refreshToken', newTokens.refreshToken);

    return true;
  } catch (error) {
    console.log("Error refreshing token", error);
    return false;
  }
}
