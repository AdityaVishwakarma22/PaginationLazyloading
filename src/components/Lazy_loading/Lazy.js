import React, { useState, useEffect } from "react";

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

  return (
    <div style={{ height: "300px", overflow: "auto" }} onScroll={handleScroll}>
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
  );
}

export default InfiniteScroll;
