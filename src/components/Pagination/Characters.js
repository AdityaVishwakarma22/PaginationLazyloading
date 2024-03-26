import { useEffect, useState, useMemo } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "./Pagination";

let PageSize = 5;

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // console.log(characters, ':::');
    // if (characters.length!==null || characters.length!==0 ){
    return characters.slice(firstPageIndex, lastPageIndex);
    // }
  }, [currentPage, characters]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={characters.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className="results">
        {currentData.map((character) => (
          <div className="character-tile">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
