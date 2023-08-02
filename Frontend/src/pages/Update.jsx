import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:8000/${id}`);
    const result = await response.json();
    if (!response.ok) {
      setError(result.message);
    }
    if (response.ok) {
      setError('');
      setUserData({
        name: result.name,
        email: result.email,
        age: result.age,
      });
    }
  };
  useEffect(() => {
    getSingleUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.message);
      setError(result.message);
    }
    if (response.ok) {
      console.log(result);
      setError('Data Added');
      setTimeout(() => {
        setError('');
      }, 1000);
      setUserData({
        name: '',
        email: '',
        age: '',
      });
      navigate('/all-post');
    }
  };

  return (
    <div>
      <div className="bg-red-800 text-center">
        {error && <h1>{error}</h1>}
      </div>
      <h1 className="text-center text-2xl">Update user</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name" className="block font-medium text-gray-800">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            className="mt-1 p-2 border border-gray-500 rounded w-full required"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            className="mt-1 p-2 border border-gray-500 rounded w-full required"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="block font-medium text-gray-800">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={userData.age}
            className="mt-1 p-2 border border-gray-500 rounded w-full required"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-400"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;