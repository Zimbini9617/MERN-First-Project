import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
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
    <div className='container mx-auto flex flex-col items-center justify-center h-full'>
      <div className='text-center mb-4'>
      <h1 className='font-bold font-mono text-2xl'>ADD USER INFORMATION:</h1>
      </div>
      <form className='bg-gray-300 border border-gray-700 rounded-lg shadow-md px-8 pt-6 pb-8 mb-4 w-96' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="name" className='block font-medium text-black'>
            UserName:
          </label>
          <input type="text" id="name" name="name" value={userData.name} className='mt-1 p-2 border border-gray-800 rounded-lg w-full required' onChange={handleChange}/>
          <label htmlFor="email" className='block font-medium text-black'>
            Email:
          </label>
          <input type="text" id="email" name="email" value={userData.email} className='mt-1 p-2 border border-gray-800 rounded-lg w-full required' onChange={handleChange}/>
          <label htmlFor="age" className='block font-medium text-black'>
            Age:
          </label>
          <input type="text" id="age" name="age" value={userData.age} className='mt-1 p-2 border border-gray-800 rounded-lg w-full required' onChange={handleChange}/>
        </div>

        <div className='text-center'>
          <button type='submit' className='px-4 py-2 bg-green-950 hover:bg-green-500 text-white rounded-lg border-2 border-white'>SUBMIT</button>
        </div>
      </form>
      
    </div>
  )
}

export default NewPost;