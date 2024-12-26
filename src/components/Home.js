import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Home() {
  const navigate = useNavigate();

  const handleNotificationsClick = () => {
    navigate('/notifications');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', background: '#fff' }}>
      <NotificationsIcon
        onClick={handleNotificationsClick}
        style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '30px' }}
      />
    </div>
  );
}

export default Home;
