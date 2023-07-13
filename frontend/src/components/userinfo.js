import React, { useEffect, useState } from 'react';
import { sendToken } from './tools/sendToken';
import { refreshToken } from './tools/refreshToken';

const Userinfo = () => {
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchBio = async () => {
      // Refresh the token before sending it
      const refreshSuccess = await refreshToken();
      if (refreshSuccess) {
        const bio = await sendToken('http://localhost:8000/profile/');
        setBio(bio);
      }
    }

    fetchBio();
  }, []);

  return (
    <div>
      {bio}
    </div>
  )
}

export default Userinfo;
