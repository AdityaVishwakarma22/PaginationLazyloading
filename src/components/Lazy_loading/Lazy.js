import React, { useState, useEffect } from "react";
import "../Pagination/App.css";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(1);
  const count = 10;

  useEffect(() => {
    const fetchMoreItems = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?results=${count}&start=${start}`
      );
      const json = await response.json();
      setData((data) => {
        return [...data, json.results];
      });
    };

    fetchMoreItems();
  }, [start]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setStart(start + 10);
    }
  };
  // style={{ height: "300px", overflow: "auto" }}
  return (
    <>
      <div className="list-container" onScroll={handleScroll}>
        {data.map((item) =>
          item.map((i) => (
            <div
              key={item}
              style={{ padding: "10px", border: "1px solid black" }}
            >
              {i.email}
            </div>
          ))
        )}
      </div>
      <div className="lazy-description">
        <h2>Description</h2>
        <p>
          Notice the scroll-bar height. Scroll to the end to fetch more items,
          which shortens the scroll-bar. This demonstrates{" "}
          <span>lazy loading</span> , where data loads on scroll instead of on
          the initial page load.
        </p>
      </div>
    </>
  );
}

export default InfiniteScroll;
