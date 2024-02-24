"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GiPlayButton } from "react-icons/gi";
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Trending = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:1337/api/trendings?populate=deep"
        );
        const responseData = response.data.data[0].attributes.recipes.data;
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextRecipes = () => {
    const nextIndex = currentIndex + 4;
    setCurrentIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  return (
    <div className="mx-20 my-20">
      <div className="text-4xl p-4 lg:flex hidden justify-center font-bowl">Trending Recipes</div>

      <div className="lg:flex hidden  bg-[#FFA2A6] rounded-2xl p-4 items-center h-96 w-auto md:gap-10 gap-6">
        {data.slice(currentIndex, currentIndex + 4).map((trendings) => (
          
            <Link href="trending/[trendingslug]" as={`trending/${trendings.attributes.slug}`} key={trendings.id} className="justify-evenly w-84 h-84 ">
              <div className="">
                <img
                src={`http://127.0.0.1:1337${trendings.attributes.Image.data.attributes.url}`}
                alt="No Image Found"
                className="h-64 w-64 p-4 mb-4 rounded-full"
              />
              </div>

             <div className="text-black text-center lg:text-lg md:text-lg text-[10px] font-bold w-64 h-20 ">
              {trendings.attributes.Title}
            </div>
            </Link>
            
        ))}

        <GiPlayButton
          size={50}
          className="cursor-pointer text-[#FFE3E3]"
          onClick={handleNextRecipes} 
         
        />
      </div>
      <div className="lg:hidden flex flex-col items-center text-center ">
        <div className="text-xl font-bold my-10">Trending Recipes</div>
       
          <div className='grid grid-cols-2 grid-rows-2 p-4 md:p-8 gap-4 w-96 md:w-[95%] h-[550px] bg-[#FFA2A6] rounded-xl'>
          {data.slice(currentIndex, currentIndex + 4).map((trendings) => (
          
          <Link href="trending/[trendingslug]" as={`trending/${trendings.attributes.slug}`} key={trendings.id} className="space-y-2">

            <div className="">
              <img
              src={`http://127.0.0.1:1337${trendings.attributes.Image.data.attributes.url}`}
              alt="No Image Found"
              className="w-40 md:w-56 h-32 md:h-40"
            />
            </div>

           <div className="h-32 w-32 md:w-56 font-bold">
            {trendings.attributes.Title}
          </div>
          </Link>

          
      ))}
      <IoIosArrowDropdownCircle 
      size={40} 
      className="cursor-pointer text-[#FFE3E3] "
      onClick={handleNextRecipes}/>

          </div>
          
        </div>

      </div>
  );
};

export default Trending;
