import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/seed.css';

function SeedSaving() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('english');
  const [userPasskey, setUserPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', content);
    formData.append('language', language); // Add language to form data

    try {
      const response = await axios.post('http://localhost:8080/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setTitle('');
      setContent('');
      setImage(null);
      setLanguage('english');
      navigate('/'); 
    } catch (error) {
      console.error('There was an error uploading the image!', error);
    }
  };

  const handleUserPasskeyChange = (e) => {
    setUserPasskey(e.target.value);
  };

  const handleUserPasskeySubmit = (e) => {
    e.preventDefault();
    const correctPasskey = "1234"; // Passkey set to 1234
    if (userPasskey === correctPasskey) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect passkey");
    }
  };

  return (
    <div className="upload-blog-section">
      {!isAuthenticated ? (
        <div className="passkey-form">
          <h1>Enter Passkey to Access the Blog Upload</h1>
          <form onSubmit={handleUserPasskeySubmit}>
            <input
              type="password"
              value={userPasskey}
              onChange={handleUserPasskeyChange}
              placeholder="Enter passkey"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="upload-blog">
          <h2>Upload Blog</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
            <label htmlFor="language">Choose a language: </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="kannada">Kannada</option>
              <option value="marathi">Marathi</option>
            </select>
            <button type="submit">Upload</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SeedSaving;
