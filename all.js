const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // MongoDB model

// Search Route with Pagination
router.get('/search', async (req, res) => {
  try {
    const query = req.query.query || ""; // Default to empty if no query
    const page = parseInt(req.query.page) || 1; // Current page (default to 1)
    const pageSize = parseInt(req.query.pageSize) || 10; // Number of items per page (default to 10)
    const skip = (page - 1) * pageSize; // Calculate the number of records to skip

    // Build the search query to check across multiple fields
    const searchQuery = {
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Search in 'name'
        { description: { $regex: query, $options: 'i' } }, // Search in 'description'
        { category: { $regex: query, $options: 'i' } } // Search in 'category'
      ]
    };

    // Get the search results with pagination
    const results = await Item.find(searchQuery)
      .skip(skip)
      .limit(pageSize);

    // Count the total number of matching documents
    const totalResults = await Item.countDocuments(searchQuery);

    // Calculate total pages
    const totalPages = Math.ceil(totalResults / pageSize);

    res.json({
      results,
      totalResults,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: "Error searching items", error });
  }
});

module.exports = router;

import { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (page = 1) => {
    setLoading(true);
    const response = await fetch(`/api/search?query=${query}&page=${page}&pageSize=10`);
    const data = await response.json();
    setResults(data.results);
    setTotalPages(data.totalPages);
    setCurrentPage(data.currentPage);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchResults(1); // Reset to the first page when new search is triggered
  };

  const handlePageChange = (newPage) => {
    fetchResults(newPage);
  };

  useEffect(() => {
    if (query) {
      fetchResults(); // Fetch results when the component mounts and query is set
    }
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? <p>Loading...</p> : null}

      <div>
        <h3>Search Results:</h3>
        {results.length > 0 ? (
          results.map((result) => <div key={result._id}>{result.name}</div>)
        ) : (
          <p>No results found</p>
        )}
      </div>

      {/* Pagination controls */}
      <div>
        {totalPages > 1 && (
          <div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

