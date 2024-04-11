import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe, image }) => {
  // console.log(recipe.images[0].name);

  return (
    <>
      <div className=" relative  flex flex-col bg-white shadow h-full rounded-md ">
        <div className="overflow-hidden relative ">
          {image && (
            <img
              className="w-full max-h-[177px]  object-cover transition-transform duration-300 transform hover:scale-110"
              src={"http://127.0.0.1:8000/recipe_img/" + image.name}
              alt={image.name}
            />
          )}
        </div>
        <div className="p-4 md:p-5">
          <h3 className="mb-2 text-regular font-nunito font-semibold  text-gray-800 dark:text-white">
            {recipe.title}
          </h3>
          <div className="flex font-nunito mb-6  justify-between items-center">
            <div>
              <h5 className="text-xs italic">by: Author {recipe.user.name} </h5>
            </div>
            <div>
              <h5 className="italic text-xs">
                Rating:
                <span className="text-xs">
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                </span>
              </h5>
            </div>
          </div>
          <div className="">
            <Link
              to={`/recipes/${recipe.id}`}
              className="block text-center text-sm w-[152px] p-2 bg-navy-blue text-white"
            >
              View
            </Link>

            <button className="uppercase absolute top-1 text-xs p-1 bg-yellow-300 right-2  ">
              {recipe.type}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
