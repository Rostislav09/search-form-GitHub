import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { fetchUsers } from './actions/action';
import SearchForm from './Components/SearchForm';
import UserList from './Components/UsersList';
import UserDetails from './Components/UserDetails';



const App = () => {
  const { loading, users, error } = useSelector(state => state);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1); 
  

  const dispatch = useDispatch();

  const handleSearch = query => {
    dispatch(fetchUsers(query));
  };

  const handleUserClick = user => {
    setSelectedUser(user);
    console.log(user);
  };

  const loadMore = () => {

    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {

      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        loadMore();
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchUsers(''));
  }, [dispatch]);

  return (
    <div>
      <div className="header-name-main"><h1 className="header-name ">Search GitHub Users</h1></div>
      <SearchForm onSearch={handleSearch} />
      <div className="row">
        <div className="col-md-6">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <UserList users={users} onItemClick={handleUserClick} />
          )}
        </div>
        <div className="col-md-6">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default App;