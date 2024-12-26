import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar notificações:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Notificações</h1>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} style={{ margin: '10px 0' }}>
              <strong>{notification.title}</strong>
              <p>{notification.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando notificações...</p>
      )}
    </div>
  );
}

export default Notifications;
