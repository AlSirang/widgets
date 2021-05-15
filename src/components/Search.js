import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(inputValue);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedTerm(inputValue);
    }, 600);
    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  useEffect(() => {
    const searchWiki = async () => {
      const res = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setSearchResult(res.data.query.search);
    };
    searchWiki();
  }, [debouncedTerm]);

  const mapedResults = searchResult.map((result) => (
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        {removeHTMLTags(result.snippet)}
      </div>
    </div>
  ));
  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label htmlFor="searchBox">Enter Search Term </label>
            <input
              id="searchBox"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="ui divided list">{mapedResults}</div>
    </div>
  );
};

export default Search;

// strip out html tags from string
function removeHTMLTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
}
