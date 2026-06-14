import { useLocation, Link } from "react-router-dom";
import { FiClock, FiSmile, FiStar, FiArrowLeft, FiLayers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/features/orderSlice";

const MenuDetails = () => {
  const location = useLocation();
  const recipe = location?.state;
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.orderItems)
  console.log(orders)

  // Fallback if someone navigates directly to this page without clicking a recipe card
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <p className="text-xl font-semibold text-gray-600 mb-4">No recipe details found.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[#0C6967] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a5856] transition-colors">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Back Button Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/menu" className="inline-flex items-center gap-2 text-gray-600 hover:text-black font-semibold transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Recipes
        </Link>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Column: Sticky Image */}
        <div className="lg:sticky lg:top-8 w-full aspect-4/3 lg:h-[500px] overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white">
          <img
            className="w-full h-full object-cover"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        {/* Right Column: Recipe Details Scroll */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags?.map((tag, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-orange-50 text-[#D95103] rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-teal-50 text-[#0C6967] rounded-full">
              {recipe.cuisine}
            </span>
          </div>

          {/* Title & Ratings */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {recipe.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold text-lg">
              <FiStar className="fill-current" />
              <span>{recipe.rating}</span>
              <span className="text-gray-400 text-sm font-normal">({recipe.reviewCount} reviews)</span>
            </div>
            <div className="text-sm font-semibold text-gray-500">
              Price Equivalent: <span className="text-[#D95103] text-xl font-extrabold ml-1">रु {recipe.caloriesPerServing}</span>
            </div>

          </div>
          <button
            onClick={() => {
              dispatch(add(recipe));
            }}
            className="bg-amber-600 w-full rounded-2xl py-3 text-xl font-semibold active:scale-105">Add to cart</button>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-4 my-6 p-4 bg-gray-50 rounded-2xl text-center">
            <div className="flex flex-col items-center">
              <FiClock className="text-xl text-[#0C6967] mb-1" />
              <span className="text-xs text-gray-400 font-medium">Prep Time</span>
              <span className="text-sm font-bold text-gray-800">{recipe.prepTimeMinutes} mins</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-200">
              <FiClock className="text-xl text-[#0C6967] mb-1" />
              <span className="text-xs text-gray-400 font-medium">Cook Time</span>
              <span className="text-sm font-bold text-gray-800">{recipe.cookTimeMinutes} mins</span>
            </div>
            <div className="flex flex-col items-center">
              <FiSmile className="text-xl text-[#0C6967] mb-1" />
              <span className="text-xs text-gray-400 font-medium">Difficulty</span>
              <span className="text-sm font-bold text-gray-800 capitalize">{recipe.difficulty}</span>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FiLayers className="text-[#0C6967]" /> Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipe.ingredients?.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#0C6967] mt-2 shrink-0" />
                  <span className="text-sm font-medium">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FiLayers className="text-[#0C6967]" /> Preparation Steps
            </h2>
            <ol className="space-y-4">
              {recipe.instructions?.map((instruction, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50/30 border border-gray-100">
                  <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-[#0C6967]/10 text-[#0C6967] font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed pt-0.5">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuDetails;