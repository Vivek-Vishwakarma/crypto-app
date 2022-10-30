import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Mediacard from "./Card";
import Page from "./Page";
const Exchanges = () => {
  const [loading, setLoading] = useState(false);
  const [exchange, setExchange] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/exchanges?per_page=50&page=${page}`
    );
    console.log(data.data);
    setExchange(data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: "20px 80px",
        }}
      >
        {exchange.map((elem) => {
          return (
            <Mediacard
              key={elem.id}
              image={elem.image}
              name={elem.name}
              rank={elem.trust_score_rank}
              url={elem.url}
            />
          );
        })}
      </div>
      <Page setPage={setPage} page={page} />
    </>
  );
};

export default Exchanges;
