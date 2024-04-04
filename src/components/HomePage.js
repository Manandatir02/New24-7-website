import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  './HomePage.css';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch articles when the component mounts
    fetchArticles();
    
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=75eb1b5dfba54bd5962acd59863da9fc');
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="container" style={{    marginTop: '70px'}}>
    <div className="hero-section text-center my-2">
      <h1>Welcome to News24/7</h1>
      <p>Your go-to source for the latest news and updates.</p>
      <Link to="/" className="btn btn-primary">Get Started</Link>
      <a  href="/" className="btn btn-secondary ml-3">Read Article</a>
    </div>
    <div className="featured-news">
      <h2>Featured News</h2>
      {/* Featured news articles can be displayed here */}
    </div>
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        <button className='btn btn-dark mx-2 my-3'> <Link to="/general" className="category">General</Link></button>
        <button className='btn btn-dark mx-2 my-3'> <Link to="/business" className="category">Business</Link></button>
        <button className='btn btn-dark mx-2 my-3'>  <Link to="/entertainment" className="category">Entertainment</Link></button>
        <button className='btn btn-dark mx-2 my-3'> <Link to="/health" className="category">Health</Link></button>
        <button className='btn btn-dark mx-2 my-3'> <Link to="/science" className="category">Science</Link></button>
        <button className='btn btn-dark mx-2 my-3'> <Link to="/sports" className="category">Sports</Link></button>
        <button className='btn btn-dark mx-2 my-3'> <Link to="/technology" className="category">Technology</Link></button>
      </div>
    </div>

      <div className="top-stories">
        <h2>Top Stories</h2>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {articles.map((_, index) => (
              <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === currentIndex ? "active" : ""}></li>
            ))}
          </ol>
          <div className="carousel-inner" style={{ height: '200px', overflow: 'hidden' }}>
  {articles.length > 0 && articles.map((article, index) => (
    <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
      <img className="d-block w-100" src={!article.urlToImage ? './commonimg.jpeg' : article.urlToImage} alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
      </div>
    </div>
  ))}
</div>

          <button className="carousel-control-prev my-3" onClick={handlePrev} type="button" disabled={articles.length <= 1} data-slide="Previous" style={{ background: 'transparent', border: 'none' }}>Previous</button>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          
            <button className="carousel-control-next" onClick={handleNext} type="button" disabled={articles.length <= 1} data-slide="next"style={{ background: 'transparent', border: 'none' }} >Next</button>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            
        </div>
      </div>
    </div>
  );
}

export default HomePage;
