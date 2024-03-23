import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TestApi.css"; // Import CSS file

const TestApi = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        // `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
        `http://localhost:3000/photos?_page=${currentPage}&_limit=10`
      );
      setPosts(response.data);
      const totalPosts = response.headers["x-total-count"];
      setTotalPages(Math.ceil(totalPosts / 10)); // Assuming 10 posts per page
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>

      <div className="card-container">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))} */}
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default TestApi;
