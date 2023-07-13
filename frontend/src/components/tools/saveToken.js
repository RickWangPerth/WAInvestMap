// saveToken.js

export function saveToken(accessToken, refreshToken) {
    try {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
  
      return Promise.resolve();
    } catch (error) {
      console.log("Error saving token", error);
      return Promise.reject(error);
    }
  }