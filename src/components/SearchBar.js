import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the URL with the search query as a query parameter
    navigate(`/search?q=${encodeURIComponent(search)}`);
  };

  return (
    <div className="col-lg-6 offset-md-2">
      <Form className="input-group m-5" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <input
            type="search"
            value={search}
            placeholder="Search in Online Store .."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button type="submit" variant="primary" className="px-4">
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
