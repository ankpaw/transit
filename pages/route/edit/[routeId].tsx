import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IRoute } from "../../../interfaces/IRoute";
const Edit = () => {
  const [route, setroute] = useState<IRoute>();
  const [routes, setroutes] = useState<Array<IRoute>>();
  const router = useRouter();
  const { routeId } = router.query;
  useEffect(() => {
    setroutes(JSON.parse(localStorage.getItem("routes") || "{}"));
  }, []);

  useEffect(() => {
    if (routes) {
      setroute(routes.filter((route) => route.id === routeId)[0]);
    }
  }, [routes]);

  return (
    <div>
      <h1 className="font-bold text-gray-700 text-2xl mb-4">
        Edit Route {routeId}
      </h1>
      {route ? <div>{route.name}</div> : null}
    </div>
  );
};

export default Edit;
