import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi";
// Import your remove or update actions here if you have them later, e.g.:
// import { remove, updateQuantity } from "../redux/features/orderSlice";

const Cart = () => {
  const orders = useSelector((state) => state.order.orderItems);
  const dispatch = useDispatch();

  // Calculate total price (using caloriesPerServing as your price field like in MenuDetails)
  const totalAmount = orders.reduce((total, item) => total + (item.caloriesPerServing * (item.quantity || 1)), 0);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <p className="text-xl font-semibold text-gray-600 mb-4">Your cart is empty.</p>
        <Link to="/menu" className="inline-flex items-center gap-2 bg-[#0C6967] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a5856] transition-colors">
          <FiArrowLeft /> Go to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Shopping Cart</h1>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: List of Items */}
          <div className="lg:col-span-2 space-y-4">
            {orders.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center justify-between">
                
                {/* Item Details Block */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-gray-100 shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-2 capitalize">
                      Cuisine: {item.cuisine}
                    </p>
                    <span className="text-[#D95103] font-extrabold text-lg">
                      रु {item.caloriesPerServing}
                    </span>
                  </div>
                </div>

                {/* Actions Block: Quantity Control & Delete */}
                <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                  
                  {/* Quantity Counter */}
                  <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
                    <button className="text-gray-500 hover:text-black transition-colors p-1">
                      <FiMinus size={16} />
                    </button>
                    <span className="font-bold text-gray-800 text-sm min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button className="text-gray-500 hover:text-black transition-colors p-1">
                      <FiPlus size={16} />
                    </button>
                  </div>

                  {/* Price Calculation & Trash */}
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-gray-900 min-w-[80px] text-right hidden sm:block">
                      रु {item.caloriesPerServing * (item.quantity)}
                    </span>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-xl hover:bg-red-50">
                      <FiTrash2 size={20} />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Total Items</span>
                <span>{orders.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Delivery Charges</span>
                <span className="text-teal-600 font-semibold">FREE</span>
              </div>
              <hr className="border-gray-100" />
              <div className="flex justify-between items-baseline">
                <span className="text-base font-bold text-gray-900">Grand Total</span>
                <span className="text-2xl font-black text-[#D95103]">रु {totalAmount}</span>
              </div>
            </div>

            <button className="w-full bg-[#0C6967] text-white py-3.5 rounded-2xl font-bold text-lg hover:bg-[#0a5856] transition-all active:scale-[1.02] shadow-sm">
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;