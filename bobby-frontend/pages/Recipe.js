"use client";
import axios from "axios";
import Header from "../app/Header";
import Footer from "../app/footer";
import "../app/globals.css";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Youtube from '../public/Youtube.jpeg'
import Image from "next/image";
const Recipe = () => {
  const [data, SetData] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:1337/api/recipes?populate=deep"
        );
        const responseData = response.data.data;
        SetData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#FFE3E3]">
      <Header />
      <div className="flex justify-center my-20 lg:text-4xl md:text-4xl text-2xl font-bold">
        Pichekkista Recipes
      </div>

      {data.map((recipe, index) => (
        <div
          key={recipe.id}
          className=" lg:mx-20 md:mx-20 mx-2 flex flex-col items-center cursor-pointer my-20 space-y-10"
          onClick={() => handleClick(index)}
        >
          <img
            src={`http://127.0.0.1:1337${recipe.attributes.Image.data.attributes.url}`}
            className="h-[500px] w-[600px] rounded-xl"
          />

          <div className="lg:text-2xl md:text-2xl text-xl font-semibold">
            {recipe.attributes.Title}
          </div>
          {clickedIndex === index && recipe.attributes.Description && (
            <div>
            <ReactMarkdown className="lg:mx-72 mx-10 text-xl">
              {recipe.attributes.Description}
            </ReactMarkdown>
            <div className="flex items-center justify-center border-2 border-black/80 lg:mx-72 md:mx-10 rounded-xl my-20 gap-10 p-4">
            <Image 
            src={Youtube}
            alt='No Image Found'
            className='w-20 h-16'/>
            <Link href={recipe.attributes.URL} className="flex justify-center underline text-xl mt-4"> You can watch the recipe Here</Link>
           
            </div>
            </div>
          )}
         
        </div>
      ))}
     
      <Footer />
    </div>
  );
};

export default Recipe;
