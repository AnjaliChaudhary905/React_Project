//import React from 'react'
// import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiArrowRightCircle,
  FiArrowLeftCircle,
} from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// import { getRecipes } from "../components/actions/recipes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  // const [recipes, setRecipes] = useState([])

  // const fetchRecipes = async () => {
  //   try {
  //     const res = await getRecipes();
  //     setRecipes(res.recipes)
  //   }
  //   catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  // useEffect(() => {
  //   fetchRecipes();
  // }, [])

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

      <section className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 lg:py-20 lg:px-30 md:py-10 md:px-20 py-10 px-10">
        <div className="bg-[#0C6967] h-126.25 w-114 rounded-tl-full rounded-tr-full relative">
          <img
            className="w-100 h-149.5 absolute -top-23.5 left-8"
            src="thumbs_up.png"
            alt="thumbs-up"
          />
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
          <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-10 gap-2 cursor-pointer">
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
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors cursor-pointer">
            Buff
          </div>
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors cursor-pointer">
            Chicken
          </div>
          <div className="border-2 border-[#EBEDF0] hover:border-black font-semibold rounded-full py-4 px-12 transition-colors cursor-pointer">
            Veg
          </div>
        </div>
        <div className="flex justify-center items-center gap-14 mt-12">
          <FiArrowLeftCircle className="text-3xl mb-10 cursor-pointer" />
          <div className="text-center">
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
          </div>
          <FiArrowRightCircle className="text-3xl mb-10 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center p-2">
          <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-8 gap-2 cursor-pointer">
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
          <img
            className="h-190 w-full object-cover"
            src="video-bg.png"
            alt="video-bg"
          />
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
                <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-14 gap-2 cursor-pointer">
                  <img
                    className="w-8 h-8"
                    src="video-icon.png"
                    alt="video-icon"
                  />{" "}
                  Watch the Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-20">
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div className="flex flex-col items-center">
              <img
                className="h-18 w-18"
                src="quality_food.png"
                alt="quality-food"
              />
              <div className="text-[31px] font-bold mt-3">Quality Food</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Only the best food with top quality products and ingredients
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-18 w-18"
                src="private_party.png"
                alt="private-party"
              />
              <div className="text-[31px] font-bold mt-3">Private Party</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Get the best food for all your private parties and gatherings
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-18 w-18" src="catering.png" alt="catering" />
              <div className="text-[31px] font-bold mt-3">Categring</div>
              <span className="w-70 text-center text-[16px] mt-4">
                Get the best food for any occasions and gatherings
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-14 gap-2 cursor-pointer">
              Explore Our Services
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="py-15 px-30">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-30">
          <div>
            <h3 className="text-[39px] font-bold text-[#101828]">
              200+
              <span className="text-[#D95103]"> Happy Customers</span>
            </h3>
            <p className="text-[25px] text-[#0C6967] font-bold">
              What our customers say about us
            </p>
            <p className="italic text-[24px] mt-15 mb-5">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>
            <span className="font-bold text-[31px]">Livia Dias</span>
            <div className="flex gap-5 items-center mt-14 text-4xl">
              <FiArrowLeftCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:-translate-x-0.2" />
              <FiArrowRightCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:translate-x-0.2" />
            </div>
          </div>
          <img className="h-138 w-110" src="customer.png" alt="customer" />
        </div>
      </section>
      <section className="py-10 px-25">
        <h3 className="text-[39px] font-bold text-center">
          Get <span className="text-[#D95103]">In Touch </span>
        </h3>
        <div className="text-[#0C6967] font-bold text-[25px] text-center">
          Our Friendly team would love to hear from you
        </div>
        <div className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex justify-center items-center m-auto p-5 mt-10">
          <div className="grid grid-cols-2 w-full">
            <div className="bg-[#0C6967] rounded-2xl p-10 text-white">
              <div className="font-semibold flex items-center gap-2 mb-3">
                <MdLocationPin /> Our Address
              </div>
              <p className="italic text-[20px]">
                New Baneshwor, Kathmandu, Bagmati, Nepal
              </p>

              <div className="font-semibold flex items-center gap-2 mt-4 mb-3">
                <FaPhoneAlt className="text-[14px]" /> Our Contact
              </div>
              <div className="flex text-[20px] gap-12 mb-4">
                <div className="flex flex-col">
                  <div className="mb-1"> Mobile </div>
                  <span>980 5689789</span>
                  <span>9841 275897</span>
                </div>
                <div className="flex flex-col">
                  <div className="mb-1"> Landline </div>
                  <span>01-4783972</span>
                </div>
              </div>

              <div className="font-semibold flex items-center gap-1">
                <MdLocationPin /> Our Address
              </div>
              <p className="italic text-[20px]">
                New Baneshwor, Kathmandu, Bagmati, Nepal
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
