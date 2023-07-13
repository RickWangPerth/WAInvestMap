// tools/getToken.js

export function getToken(token) {
  return new Promise((resolve, reject) => {
    try {
      const storedData = sessionStorage.getItem(token);
      if (storedData) {
        resolve(storedData);
      } else {
        resolve(null);
      }
    } catch (error) {
      console.log("Error getting token", error);
      reject(error);
    }
  });
}