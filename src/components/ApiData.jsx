import React, { useEffect, useState } from "react";

function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h2>Fetched API Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} <br/> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
