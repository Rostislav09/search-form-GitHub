import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = ({ user }) => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    if (user) {
      // Выполняем запрос к API для получения числа подписчиков
      axios.get(user.followers_url)
        .then(response => setFollowersCount(response.data.length))
        .catch(error => console.log(error));

      // Выполняем запрос к API для получения числа подписок
      axios.get(user.following_url)
        .then(response => setFollowingCount(response.data.length))
        .catch(error => console.log(error));
    }
  }, [user]);

  if (!user) {
    return <div className="user-details bg-light border rounded p-3 text-center">No user selected.</div>;
  }

  const {
    login,
    avatar_url,
    company,
    email,
    blog
  } = user;

  return (
    <div className="user-details bg-light border rounded p-3 text-center">
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      <ul className="list-unstyled">
        <li>Followers: {followersCount}</li>
        <li>Following: {followingCount}</li>
        <li>Company: {company ?? 'No company'}</li>
        <li>Email: {email ?? 'No email'}</li>
        <li>Blog: {blog ?? 'No blog'}</li>
      </ul>
    </div>
  );
};

export default UserDetails;