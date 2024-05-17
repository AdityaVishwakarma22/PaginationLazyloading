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
      <h2>Description</h2>
      <p>
        Notice the height of scroll-bar. Now scroll the content to end, which
        would fetch more list elements resulting in shortening of scroll-bar
        height.
      </p>
      <p>
        Hence Lazy loading is implemented - here data is being fetched on
        scrolling to the end and not on first load of page.
      </p>
    </>
  );
}

export default InfiniteScroll;
