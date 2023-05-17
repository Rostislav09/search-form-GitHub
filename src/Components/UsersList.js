import React from 'react';
import { useEffect, useRef } from 'react';
import '../Components/UserList.css'

const UserList = ({ users, onItemClick, onLoadMore }) => {
  const userListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
   
      if (userListRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = userListRef.current;
    
        if (scrollTop + clientHeight === scrollHeight) {
          onLoadMore(); 
        }
      }
    };

    if (userListRef.current) {
      userListRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
   
      if (userListRef.current) {
        userListRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onLoadMore]);

  return (
    <ul className="user-list" ref={userListRef}>
      {users.map(user => (
        <li key={user.id} className="user-list-item" onClick={() => onItemClick(user)}>
          <a href={`/users/${user.username}`} className="d-flex align-items-center">
            <img src={user.avatar_url} alt={user.login} className="user-avatar" />
            <span className="user-username">{user.login}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

