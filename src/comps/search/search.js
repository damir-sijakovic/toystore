import "./search.css";

const Search = () => {
  const url = new URL(window.location.href);
  const s = url.searchParams.get("s");

  return (
    <section className="py-5 text-center container main-search">
      <h1>Search</h1>

      <div className="container">
		<div className="alert alert-warning" role="alert">
		<h4 className="alert-heading">Search term:</h4>
		<p className="display-1">{s}</p>
		</div>
      </div>

      <a href="/" className="btn btn-warning card-button" type="submit">
        Go Home
      </a>
    </section>
  );
};

export default Search;
