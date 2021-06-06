import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IRoute } from "../../../interfaces/IRoute";
import { IStop } from "../../../interfaces/IStop";
import StopForm from "../../../components/common/StopForm";
const Edit = () => {
  const [route, setroute] = useState<IRoute>();
  const [routes, setroutes] = useState<Array<IRoute>>();
  const [name, setname] = useState<string>();
  const [direction, setdirection] = useState<string>();
  const [status, setstatus] = useState<string>();
  const [stops, setstops] = useState<Array<IStop>>([]);
  const [routeIndex, setrouteindex] = useState(-1);
  const router = useRouter();

  const { routeId } = router.query;
  useEffect(() => {
    setroutes(JSON.parse(localStorage.getItem("routes") || "{}"));
  }, []);

  useEffect(() => {
    if (routes) {
      routes.forEach((route, index) => {
        if (route.id === routeId) {
          setroute(route);
          setrouteindex(index);
        }
      });
    }
  }, [routes]);

  useEffect(() => {
    if (route) {
      setname(route.name);
      setdirection(route.direction);
      setstops(route.stops);
      setstatus(route.status);
    }
  }, [route]);

  const removeStopHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      setstops(
        stops.filter((stop) => stop.id !== (target as HTMLInputElement).value)
      );
    }
  };

  const renderStops = () => {
    return (
      <ul>
        {stops.map(({ name, id }) => {
          return (
            <li className="mb-2" key={id}>
              <span className="text-md px-2">{name}</span>
              <button
                value={id}
                onClick={(event) => removeStopHandler(event)}
                className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold p-2 rounded ml-2"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  const onEditRoute = (event: React.FormEvent) => {
    event.preventDefault();
    if (routeIndex !== -1) {
      let updatedRoutes = routes;
      if (updatedRoutes && name && direction && status && routeId) {
        updatedRoutes[routeIndex] = {
          name: name,
          id: routeId[0],
          direction: direction,
          status: status,
          stops: stops,
        };
        localStorage.setItem("routes", JSON.stringify(updatedRoutes));
      }

      router.push("/routes/list");
    }
  };

  return route ? (
    <div>
      <h1 className="font-bold text-gray-700 text-2xl mb-4">
        Edit Route {routeId}
      </h1>
      <form
        onSubmit={(event) => onEditRoute(event)}
        className="w-full max-w-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Route Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                name ? "border-black" : "border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
              type="text"
              placeholder="107"
              onChange={(event) => setname(event.target.value)}
            />
            {name ? null : (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Route ID
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                routeId ? "border-black" : "border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              type="text"
              value={routeId}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Direction
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(event) => setdirection(event.target.value)}
              >
                <option value="UP">UP</option>
                <option value="DOWN">DOWN</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Status
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(event) => setstatus(event.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <h3 className="block uppercase text-gray-700 font-bold mb-2 text-xs">
              Stops
            </h3>
            {renderStops()}
            <StopForm onSubmit={setstops} />
          </div>
        </div>
        <button
          type="submit"
          disabled={!(name && stops.length > 0)}
          className={`bg-blue-500 hover:bg-blue-700 text-md text-white font-bold py-2 px-4 rounded mb-4${
            !(name && stops.length > 0) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Edit
        </button>
      </form>
    </div>
  ) : null;
};

export default Edit;
