import React, { useState } from "react";
import { IStop } from "../../interfaces/IStop";
type StopFormProps = {
  onSubmit: (value: React.SetStateAction<Array<IStop>>) => void;
};
const StopForm = ({ onSubmit }: StopFormProps): JSX.Element => {
  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const onAddStop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onSubmit((stops: Array<IStop>) => [
      ...stops,
      {
        name,
        id,
        latitude,
        longitude,
      },
    ]);
  };

  return (
    <div className="border-2 p-2 mb-4">
      <h2 className="font-bold text-gray-700 text-xl mb-4">{name}</h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Stop Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              name ? "border-black" : "border-red-500"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="text"
            placeholder="Albuquerque"
            onChange={(event) => {
              setname(event.target.value);
            }}
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
            Stop ID
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              id ? "border-black" : "border-red-500"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-last-name"
            type="text"
            placeholder="TR-107-SHXP"
            onChange={(event) => setid(event.target.value)}
          />
          {id ? null : (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Latitude
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              latitude ? "border-black" : "border-red-500"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="text"
            placeholder="0.000000"
            onChange={(event) => setlatitude(event.target.value)}
          />
          {latitude ? null : (
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
            Longitude
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              longitude ? "border-black" : "border-red-500"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-last-name"
            type="text"
            placeholder="0.000000"
            onChange={(event) => setlongitude(event.target.value)}
          />
          {longitude ? null : (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>
      <button
        disabled={!(name && id && latitude && longitude)}
        onClick={(event) => onAddStop(event)}
        className={`bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded mb-4 ${
          !(name && id && latitude && longitude)
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        + Add Stop
      </button>
    </div>
  );
};

export default StopForm;
