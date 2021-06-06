import React, { useEffect, useState } from "react";

const List = () => {
  const [routes, setroutes] = useState([]);
  useEffect(() => {
    setroutes(JSON.parse(localStorage.getItem("routes")), console.log(routes));
  }, []);
  return (
    <div>
      <h1 className="font-bold text-gray-700 text-2xl mb-4">Routes List</h1>
      <ul>
        {routes &&
          routes.map(({ name, id, status, direction, stops }) => {
            return (
              <li className="mb-2" key={id}>
                <h2 className="font-bold text-gray-700 text-xl mb-4">{name}</h2>
                <div className="border p-2">
                  <p>ID: {id}</p>
                  <p>Status: {status}</p>
                  <p>
                    Direction:{" "}
                    {direction === "UP" ? (
                      <span role="img" aria-label="up">
                        ⬆️
                      </span>
                    ) : (
                      <span role="img" aria-label="down">
                        ⬇️
                      </span>
                    )}
                  </p>
                  <div>
                    Stops:
                    <ul>
                      {stops.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
