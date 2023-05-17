import React from 'react';

const UserDetails = ({ user }) => {
  
  if (!user) {
    return <div className="user-details bg-light border rounded p-3 text-center">No user selected.</div>;
  }

  const {
    login,
    avatar_url,
    followers_url,
    following_url,
    company,
    email,
    blog
  } = user;

  return (
    <div className="user-details bg-light border rounded p-3 text-center">
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      <ul className="list-unstyled">
        <li>Followers: {followers_url}</li>
        <li>Following: {following_url}</li>
        <li>Company: {company ?? 'No company'}</li>
        <li>Email: {email ?? 'No email'}</li>
        <li>Blog: {blog ?? 'No blog'}</li>
      </ul>
    </div>
  );
};

export default UserDetails;