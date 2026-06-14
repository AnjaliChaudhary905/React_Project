//import React from 'react'
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiArrowRightCircle,
  FiArrowLeftCircle,
} from "react-icons/fi";
import { getRecipes } from "../components/actions/recipes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    try {
      const res = await getRecipes();
      setRecipes(res.recipes)
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-200">
        <div className="md:relative mt-20 md:mt-0 mx-4 top-38.75 left-39">
          <span className="text-[16px] tracking-[12%] font-extralight align-middle leading-none text-[#6B788E]  ">
            RESTAURANT
          </span>
          <div className="flex items-center">
            <span className="font-bold text-[61px]">The</span>
            <div className="relative -rotate-2.5">
              <img
                className=" w-[190.5px] h-[76.11px]"
                src="one.png"
                alt="one"
              />
              <span className="font-bold text-white text-[61px] left-2 -top-2 absolute">
                #One
              </span>
            </div>
          </div>
          <div className="text-[61px] font-bold">
            Momo <span className="text-[#D95103] ">Restaurant</span>
          </div>
          <p className="text-[20px] font-semibold flex items-baseline gap-2">
            More than{" "}
            <span className="text-[#D95103] font-bold text-[25px]">
              {" "}
              20+ Varieties
            </span>
            of momo available for you
          </p>
          <button 
          onClick={()=>navigate("/menu")}
          className="bg-[#0C6967] rounded-full py-5 px-10 text-white flex items-center mt-10 gap-2 active:scale-105">
            Explore Food Menu
            <FiArrowRight />
          </button>
        </div>
        <div className="relative md:hidden lg:block hidden">
          <img
            className="h-220 absolute right-0 -top-20 "
            src="circle.png"
            alt="circle"
          />
          <img
            className="absolute top-40 left-30 w-155.5 h-108.5 z-20"
            src="home_momo.png"
            alt="home-momo"
          />
          <img
            className="h-38 w-44 absolute top-33 left-22"
            src="black_dot.png"
            alt="black-dot"
          />
          <img
            className="h-38 w-44 right-14 bottom-46 absolute "
            src="white_dot.png"
            alt="white-dot"
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 p-20">
        <div>
          <div className="bg-[#0C6967] h-[505px] w-[456px] rounded-tl-full rounded-tr-full relative">
            <img
              className="w-100 h-149.5 absolute -top-24 left-8"
              src="thumbs_up.png"
              alt="thumbs-up"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-[39px]">
            Why Customer <span className="text-[#D95103]">Love Us</span>
          </h2>
          <p className="text-[#6B788E] text-[20px] mt-8">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
            cursus turpis.
          </p>
          <button className="bg-[#0C6967] rounded-full py-5 px-10 text-white flex items-center mt-10 gap-2">
            Explore Our Story
            <FiArrowRight />
          </button>
        </div>
      </section>
      <section className="p-8">
        <div className="text-center text-[39px] font-bold">
          Our <span className="text-[#D95103] ">Most Popular</span> Recipes
          <div className=" font-normal mt-3 text-[20px] text-[#6B788E]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6 p-4">
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors">
            Pizza
          </div>
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors">
            Stir-fry
          </div>
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors">
            cookies
          </div>
        </div>
        <div className="flex justify-center items-center gap-11 mt-10">
          <FiArrowLeftCircle className="text-3xl mb-10" />
          {recipes.map((recipe,index) => (
            <div key={index}
            className="text-center">
            <img className="w-65 h-47.25 rounded-2xl"
             src={recipe.image}
              alt="buffmomo" />
            <div className="text-[25px] font-bold mt-10">{recipe.name}</div>
            <div className="text-[20px]">
              रु
              <span className="text-[#D95103] text-[31px] font-bold">{recipe.caloriesPerServing}</span>
            </div>
          </div>))}
          {/* <div className="text-center">
            <img className="w-65 h-47.25" src="buffmomo.png" alt="buffmomo" />
            <div className="text-[25px] font-bold mt-10">Buff Momo</div>
            <div className="text-[20px]">
              रु
              <span className="text-[#D95103] text-[31px] font-bold">150</span>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-65 h-47.25"
              src="fried_momo.png"
              alt="fried_momo"
            />
            <div className="text-[25px] font-bold mt-10">Buff Fry Momo</div>
            <div className="text-[20px]">
              रु
              <span className="text-[#D95103] text-[31px] font-bold">180</span>
            </div>
          </div>
          <div className="text-center">
            <img className="w-65 h-47.25" src="c_momo.png" alt="c_momo" />
            <div className="text-[25px] font-bold mt-10">Buff C. Momo</div>
            <div className="text-[20px]">
              रु
              <span className="text-[#D95103] text-[31px] font-bold">200</span>
            </div>
          </div> */}
          <FiArrowRightCircle className="text-3xl mb-10" />
        </div>
        <div className="flex justify-center items-center p-2">
          <button onClick={()=>navigate("/menu")}
          className="bg-[#0C6967] rounded-full py-5 px-10 text-white flex items-center mt-8 gap-2 active:scale-105">
            Explore Our menu
            <FiArrowRight />
          </button>
        </div>
      </section>
      <section>
        <div className="p-10 text-[39px] font-bold text-center">
          <span className="text-[#D95103] me-3 "> We Offer People</span>
          <span>The Service They Want</span>
        </div>
        <div className="relative">
          <img className="h-190 w-full object-cover" src="video-bg.png" alt="video-bg" />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="flex justify-center items-center">


            <div className="absolute top-[32%]">
              <div className="text-center">
                <div className="text-white text-[49px] font-bold">
                  Process behind the making
                </div>
                <div className=" text-white text-[25px]">
                  See how only chefs cooks only the best momos
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-[#0C6967] rounded-full py-5 px-10 text-white flex items-center mt-14 gap-2">
                  <img className="w-8 h-8" src="video-icon.png" alt="video-icon" /> Watch the Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
