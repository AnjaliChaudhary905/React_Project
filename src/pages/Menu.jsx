import { useEffect, useState } from "react"
import { getALLRecipes } from "../components/actions/recipes"
import { useNavigate } from "react-router-dom"



const Menu = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([])

  const fetchAllRecipe = async () => {
    try {
      const res = await getALLRecipes();
      setRecipes(res.recipes)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  useEffect(() => {
    fetchAllRecipe();
  }, [])
  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[320px] flex flex-col justify-between"
          >
            {/* Image Container with Zoom Effect */}
            <div className="w-full h-52 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center">
              <img
                onClick={() => navigate(`/menu/${recipe.id}`, { state: recipe })}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={recipe.image}
                alt={recipe.name}
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-col grow items-center mt-6">
              <h3 className="text-[22px] font-bold text-gray-800 text-center leading-tight min-h-14 flex items-center justify-center px-2 line-clamp-2">
                {recipe.name}
              </h3>

              {/* Price Container */}
              <div className="text-[18px] text-gray-500 font-medium mt-4 flex items-baseline gap-1">
                <span>रु</span>
                <span className="text-[#D95103] text-[32px] font-extrabold tracking-tight">
                  {recipe.caloriesPerServing}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu