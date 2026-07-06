import "../styles/hero.css";
import { motion } from "framer-motion";

export default function Hero({
  search,
  setSearch,
  resources
}) {

  const suggestions = resources
    .filter((item) => {

      if (search === "") return false;

      const query = search.toLowerCase();

      return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

    })
    .slice(0,5);

  return (

    <motion.section

      className="hero"

      initial={{opacity:0,y:30}}

      animate={{opacity:1,y:0}}

      transition={{duration:.8}}

    >

      <motion.div

      className="heroBadge"

      initial={{opacity:0}}

      animate={{opacity:1}}

      transition={{delay:.3}}

      >

      ✦ CURATED COLLECTION

      </motion.div>

      <h1>

        Find the Internet's
        <br/>
        Best Resources.

      </h1>

      <p>

        Websites, AI tools, coding roadmaps,
        notes and everything shared by
        <strong> Bits.priyam.</strong>

      </p>

      <div className="searchWrapper">

        <span className="searchIcon">

          ⌕

        </span>

        <input

          className="search"

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          placeholder="Search AI tools, websites, notes..."

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

              <span>

                {item.category}

              </span>

              <strong>

                {item.title}

              </strong>

            </div>

          ))

          }

        </div>

        }

      </div>

    </motion.section>

  );

}
