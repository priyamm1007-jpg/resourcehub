import "../styles/hero.css";

export default function Hero({
  search,
  setSearch,
  resources
}) {

  const suggestions = resources.filter((item) => {

    if (search === "") return false;

    return item.title
      .toLowerCase()
      .includes(search.toLowerCase());

  }).slice(0,5);

  return (

    <section className="hero">

      <h1>Find Everything.</h1>

      <p>
        Every website, roadmap and tool I've shared.
      </p>

      <div className="searchWrapper">

        <span className="searchIcon">
          ⌕
        </span>

        <input

          className="search"

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          placeholder="Search resources..."

        />

        {

        suggestions.length>0 &&

        <div className="suggestions">

          {

          suggestions.map((item)=>(

            <div

            key={item.id}

            className="suggestion"

            onClick={()=>setSearch(item.title)}

            >

              📄 {item.title}

            </div>

          ))

          }

        </div>

        }

      </div>

    </section>

  );

}