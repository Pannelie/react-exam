import "./searchBar.css";

function SearchBar({ query, setQuery }) {
  return (
    <>
      <input
        aria-label="Sök efter event"
        type="text"
        placeholder="Sök event..."
        className="search-bar"
        value={query}
        onClick={() => console.log(`Sökfält klickat`)}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
