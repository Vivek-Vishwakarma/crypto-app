// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loading from "./Loading";
// const Coins = () => {
//   const [loading, setLoading] = useState(false);
//   const fetchData = async () => {
//     setLoading(true);
//     const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/exchanges`);
//     console.log(data.data);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return loading ? <Loading /> : <></>;
// };

// export default Coins;
