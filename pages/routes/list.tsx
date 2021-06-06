import React, { useEffect, useState } from "react";
import { IRoute } from "../../interfaces/IRoute";
import Link from "next/link";

const List = () => {
  const [routes, setroutes] = useState<Array<IRoute>>();
  useEffect(() => {
    setroutes(JSON.parse(localStorage.getItem("routes") || "{}"));
  }, []);

  const deleteRoute = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      setroutes(
        routes &&
          routes.filter(
            (route) => route.id !== (target as HTMLInputElement).value
          )
      );
    }
  };

  return (
    <div>
      <h1 className="font-bold text-gray-700 text-2xl mb-4">Routes List</h1>
      {routes && routes.length > 0 ? (
        <ul>
          {routes.map(({ name, id, status, direction, stops }) => {
            return (
              <li className="mb-2" key={id}>
                <h2 className="font-bold text-gray-700 text-xl mb-4">
                  {name}
                  <button
                    className="float-right"
                    title="Delete"
                    value={id}
                    onClick={(event) => deleteRoute(event)}
                  >
                    🗑️
                  </button>
                  <Link href={`/route/edit/${id}`}>
                    <a className="float-right mr-4">Edit</a>
                  </Link>
                </h2>
                <div className="border p-2">
                  <p>ID: {id}</p>
                  <p>
                    Status:{" "}
                    {status === "active" ? (
                      <span role="img" aria-label="up">
                        ✅
                      </span>
                    ) : (
                      <span role="img" aria-label="up">
                        ❌
                      </span>
                    )}
                  </p>
                  <p>
                    Direction:
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
      ) : (
        <div>
          There are no routes to display.😔
          <br />
          You can add one
          <Link href="/route/create">
            <a className="ml-1 text-blue-400">here</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default List;
