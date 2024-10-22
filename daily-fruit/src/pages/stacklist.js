//All styling has been imported from https://tailwindui.com/

export default function build_stack(foodList) {
  return (
    <ul role="list" className="divide-y divide-gray-200 rounded-lg shadow overflow-hidden bg-white">
      {/* GPT -> help with building the map function - it was also given in the tailwind UI*/}
      {foodList.map((food) => (
        <li key={food.foodName} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150">
          <div className="flex items-center min-w-0 gap-x-4">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
              <img
                alt={food.foodName}
                src={food.thumb}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900 truncate">{food.foodName}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">{food.brandName}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
