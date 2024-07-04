import React from "react";
import Card from "./Card/Card";
import { useState } from "react";
import canteens from "./Card/Canteens";
import restaurants from "./Card/Restaurants"

const Homepage = () => {
  const [search, setSearch] = useState(true);
  const handlesearch = () => {
    console.log(search);
    setSearch(!search);
  };

  // const dataCanteen = {
  //   data: [
  //     {
  //       name: "HJB",
  //       cuisine: "North Indian",
  //       timing: "8am-3pm",
  //     },
  //   ],
  // };
  // const dataResturant = {
  //   data: [
  //     {
  //       name: "HJB",
  //       cuisine: "North Indian",
  //       timing: "8am-3pm",
  //     },
  //   ],
  // };

  const [errorCanteen, setErrorCant] = useState(false);
  const [errorResturant, setErrorRest] = useState(false);
  // if (Object.keys(dataCanteen).length === 0) {
  //   setErrorCant(true);
  // }
  // if (Object.keys(dataResturant).length === 0) {
  //   setErrorRest(true);
  // }
  const notFound = (
    <div className="h-full w-full flex flex-col items-center text-center justify-center text-5xl text-orange-600 gap-2 font-semibold">
      <h1>ERROR 404</h1>
      <h1>Page not found!!</h1>
    </div>
  );
  const nightCanteenCards = (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 w-3/4 h-4/5">
      {canteens.map((canteen, index) => (
      <Card 
        key={index}
        image={canteen.image}
        title={canteen.title}
        cuisine={canteen.cuisine}
        hours={canteen.hours}
      />
    ))}
    </div>
  );
  const resturantCards = (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 w-3/4 h-4/5">
      {restaurants.map((canteen, index) => (
      <Card 
        key={index}
        image={canteen.image}
        title={canteen.title}
        cuisine={canteen.cuisine}
        hours={canteen.hours}
      />
    ))}
    </div>
  );

  const canteen_nav = (
    <>
      <div className="types w-3/4 h-auto bg-white m-8 flex justify-start items-center border-2 border-solid border-orange-600 border-opacity-50 shadow-md rounded-3xl">
        <section className="m-2 p-2 flex justify-between items-center w-2/5 h-full">
          <div className="night w-1/2 h-full text-xl  font-bold cursor-pointer flex justify-center items-center">
            <span
              className="w-auto h-auto p-2 bg-orange-600 rounded-full text-white shadow-md"
              onClick={handlesearch}
            >
              Night Canteens
            </span>
          </div>

          <div className="restaurents w-1/2 h-full text-xl font-bold cursor-pointer flex justify-center items-center">
            <span
              className="w-auto h-auto p-2 bg-white rounded-full text-orange-600 shadow-md"
              onClick={handlesearch}
            >
              {" "}
              Restaurants{" "}
            </span>
          </div>
        </section>
      </div>
      {errorCanteen ? notFound : nightCanteenCards}
    </>
  );

  const resturant_nav = (
    <>
      <div className="types w-3/4 h-auto bg-white m-8 flex justify-start items-center border-2 border-solid border-orange-600 border-opacity-50 shadow-md rounded-3xl">
        <section className="m-2 p-2 flex justify-between items-center w-2/5 h-full">
          <div className="night w-1/2 h-full text-xl  font-bold cursor-pointer flex justify-center items-center">
            <span
              className="w-auto h-auto p-2 bg-white rounded-full text-orange-600 shadow-md"
              onClick={handlesearch}
            >
              Night Canteens
            </span>
          </div>

          <div className="restaurents w-1/2 h-full text-xl font-bold cursor-pointer flex justify-center items-center">
            <span
              className="w-auto h-auto p-2 bg-orange-600 rounded-full text-white shadow-md"
              onClick={handlesearch}
            >
              {" "}
              Restaurants{" "}
            </span>
          </div>
        </section>
      </div>
      {errorResturant ? notFound : resturantCards}
    </>
  );

  return (
    <div className="container h-full w-full flex flex-col justify-center items-center">
      {search ? canteen_nav : resturant_nav}
    </div>
  );
};

export default Homepage;
