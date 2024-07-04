import React from "react";
import rest from "./rest.jpg"
import {Rating} from '@mui/material';
import CardMenu from "./CardMenu";
import {useState} from "react";
import {ItemList} from "./Menu";

const Menupage = () => {
  const [showUI, setshowUI] = useState(0);
  const value = 2.5;

  // const inistyle = "h-auto w-auto p-2 ";
  const finstyle = "h-auto w-auto p-2 border-b-orange-600 border-b-solid border-2 focus"

  const popdish = (<span className={showUI === 0 && finstyle} onClick={() => {
    setshowUI(0)
  }}>Popular Dishes</span>)
  const Starters = (<span className={showUI === 1 && finstyle} onClick={() => {

    setshowUI(1)
  }}>Starters</span>)
  const Main = (<span className={showUI === 2 && finstyle} onClick={() => {

    setshowUI(2)
  }}>Main Course</span>)
  const Dessert = (<span className={showUI === 3 && finstyle} onClick={() => {

    setshowUI(3)
  }}>Desserts</span>)

  const Popdish = (
    <div className="menu w-4/5 h-1/3 grid grid-flow-row grid-cols-2 gap-4 pt-6">
      {
        ItemList.map((item, i) => {
            if (item.foodFlag === 'p') {
              return <CardMenu {...item} key={i}/>
            }
            return null
          }
        )
      }
    </div>
  )

  const main = (
    <div className="menu w-4/5 h-1/3 grid grid-flow-row grid-cols-2 gap-4 pt-6">
      {
        ItemList.map((item, i) => {
            if (item.foodFlag === 'm') {
              return <CardMenu {...item} key={i}/>
            }
            return null
          }
        )
      }

    </div>
  )

  const start = (
    <div className="menu w-4/5 h-1/3 grid grid-flow-row grid-cols-2 gap-4 pt-6">
      {
        ItemList.map((item, i) => {
            if (item.foodFlag === 's') {
              return <CardMenu {...item} key={i}/>
            }
            return null
          }
        )
      }


    </div>
  )

  const dess = (
    <div className="menu w-4/5 h-1/3 grid grid-flow-row grid-cols-2 gap-4 pt-6">
      {
        ItemList.map((item, i) => {
            if (item.foodFlag === 'd') {
              return <CardMenu {...item} key={i}/>
            }
            return null
          }
        )
      }

    </div>
  )


  return (
    <>
      <div className=" w-full h-full flex flex-col justify-center items-center ">
        <div
          className="container w-4/5 h-2/5 flex justify-center items-center border-solid border-2 border-orange-600 border-opacity-40 shadow-lg rounded-md p-2">
          <div className="coverpic w-3/5 h-full">
            <img src={`${rest}`} alt="" className="w-full h-full"/>
          </div>
          <div className="desc h-full w-2/5 flex flex-col justify-center items-start">
            <div className="heading h-auto w-full ml-4 text-5xl text-black font-bold flex justify-center items-center ">
              HJB Canteen
            </div>
            <div className="reviews h-auto w-full ml-4 flex justify-center items-center text-xl mt-4">
              Rating :
              <Rating name="read-only" value={value} readOnly size="large"/>
            </div>
            <div className="desc flex justify-center items-center mt-4 h-auto w-full text-xl">
              North Indian, South Indian
            </div>
            <div className="open flex justify-center items-center w-full h-auto">
              Opens 8:00 PM - Closes 3:00 AM
            </div>
          </div>
        </div>


        <div
          className="categories w-4/5 h-auto mt-8 flex justify-between items center border-solid border-b-orange-600 border-b-2 shadow-md  ">
          <div className="container flex justify-between items-center h-full w-3/5">
            <div className="Popular w-1/4 h-full text-xl font-bold  p-4 text-orange-600 cursor-pointer text-center ">
              {popdish}
            </div>

            <div className="Starters w-1/4 h-full text-xl font-bold p-4 text-orange-600 cursor-pointer  text-center ">
              {Starters}
            </div>

            <div className="Main w-1/4 h-full text-xl font-bold p-4 text-orange-600 cursor-pointer  text-center ">
              {Main}
            </div>

            <div className="Desserts w-1/4 h-full text-xl font-bold p-4 text-orange-600 cursor-pointer  text-center ">
              {Dessert}
            </div>
          </div>
        </div>
            {showUI === 0 && Popdish}
            {showUI === 1 && start}
            {showUI === 2 && main}
            {showUI === 3 && dess}

      </div>
    </>
  )
}

export default Menupage;
