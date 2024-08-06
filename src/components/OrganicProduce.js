import React, { useEffect, useState } from "react";
import axios from "axios"; 
import "../Styles/organicblog.css";

function OrganicProduce() {
  const [blogs, setBlogs] = useState([]);
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const languageCodes = {
    english: 'en-US',
    hindi: 'hi-IN',
    kannada: 'kn-IN',
    marathi: 'mr-IN'
  };

  useEffect(() => {
    fetchBlogs(language);
  }, [language]);

  const fetchBlogs = async (lang) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:8080/images/language/${lang}`);
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        throw new Error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getImageSrc = (type, base64Data) => {
    return `data:${type};base64,${base64Data}`;
  };

  const handlePlayAudio = async (text) => {
    try {
      const response = await axios.post('http://localhost:8081/convert-text-to-speech', { text, languageCode: languageCodes[language] });
      if (response.status === 200) {
        const audio = new Audio(`data:audio/mp3;base64,${response.data}`);
        audio.play();
      } else {
        throw new Error("Failed to play audio");
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <div className="organic-produce-section" id="organic-produce">
      <div className="banner">
        <h1 className="banner-title">Welcome to Our Organic Farming Blog</h1>
        <p className="banner-subtitle">
          Empowering your audience with knowledge about organic farming.
        </p>
      </div>

      <div className="language-selector">
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
      </div>

      <div className="blogs-section">
        <h2>Blogs</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : blogs.length === 0 ? (
          <p>No blogs available for the selected language.</p>
        ) : (
          <div className="blogs">
            {blogs.map((blog, index) => (
              <div key={index} className="blog">
                <h3>{blog.title}</h3>
                {blog.imageData ? (
                  <img
                    src={getImageSrc(blog.type, blog.imageData)}
                    alt={blog.title}
                    style={{ maxWidth: "100%" }}
                    onError={() => console.error('Error loading image')}
                  />
                ) : (
                  <p>No image available</p>
                )}
                <p>{blog.description}</p>
                <button onClick={() => handlePlayAudio(blog.description)}>Play Audio</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrganicProduce;
