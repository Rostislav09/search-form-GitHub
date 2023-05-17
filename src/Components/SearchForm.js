import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input type="text" className="form-control mr-2" value={query} onChange={e => setQuery(e.target.value)} />
            <div className="input-group-append">
              <button 
                className="btn btn-primary ms-2" 
                type="button" 
                onClick={handleSearch}
                style={{ backgroundColor: '#E98074', borderColor: '#E98074', color: '#FFFFFF' }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SearchForm;




