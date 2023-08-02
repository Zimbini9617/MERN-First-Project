import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
const AllPost = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const getData = async () => {
    const response = await fetch('http://localhost:8080');

    const result = await response.json();
    if (!response.ok) {
      setError(result.message);
    }
    if (response.ok) {
      setData(result);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/${id}`, {
      method: 'DELETE',
    });
  
    const result = await response.json(); // Await the response.json()
  
    if (!response.ok) {
      setError(result.message);
    } else {
      setError('Deleted Successfully');
    }
  
    setTimeout(() => {
      setError('');
      getData();
    }, 1000);
  };
  
  return (
    <div>
      <div className="bg-red-800 text-center text-white font-bold uppercase">
        {error && <h1>{error}</h1>}
      </div>

      <h1 className='font-bold font-mono text-green-950 text-2xl'>Show All Data:</h1>
      <div className="flex gap-3 mt-4 flex-wrap">
        {data?.map((user) => (
          <Card user={user} key={user._id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AllPost