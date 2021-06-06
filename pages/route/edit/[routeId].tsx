import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Edit = () => {
  const [route, setroute] = useState();
  const [routes, setroutes] = useState();
  const router = useRouter();
  const { routeId } = router.query;
  useEffect(() => {
    setroutes(JSON.parse(localStorage.getItem("routes")));
  }, []);

  useEffect(() => {
    if (routes && routes.length > 0) {
      setroute(
        routes.filter((route) => route.id === routeId),
        console.log(route)
      );
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
