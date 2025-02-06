import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CounterComponent from "./CounterComponent";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function SingleProductCardComponent({ product }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [counter, setCounter] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [total, setTotal] = useState(counter * product.price);

  useEffect(() => {
    setTotal(counter * product.price);
  }, [counter]);

  function handleCurrentImg(index) {
    setCurrentImg(index);
  }

  function handleLike() {
    setIsLiked(!isLiked);
    console.log(isLiked);
  }
  return (
    <div className="flex py-[30px] gap-[10px]">
      <div className="w-[50%] flex flex-col items-center gap-2">
        <img
          src={product.images[currentImg]}
          alt={product.title}
          className="w-[70%] border border-slate-900 object-cover rounded-md dark:border-slate-200"
        />
        <div className="flex gap-1 justify-center items-center w-[55%]">
          {product.images.map((el, i) => {
            return (
              <img
                src={el}
                key={i}
                className={`w-[20%] border border-slate-900 object-cover rounded-md dark:border-slate-200 ${
                  currentImg === i ? "selected dark:selected" : ""
                }`}
                onClick={() => handleCurrentImg(i)}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[50%] pb-[70px]">
        <div className="border-b border-b-slate-400 h-[50%] flex flex-col justify-start gap-[25px]">
          <h4 className="text-3xl font-semibold">{product.title}</h4>
          <p className="text-lg">${product.price}</p>
          <p className="text-[12px]">Reviews: {product.rating}</p>
          <p className="flex gap-3 items-center">
            <b>Availability:</b>
            {product.stock > 0 ? (
              <FaCheck color="green" />
            ) : (
              <IoMdClose color="red" />
            )}
            {product.stock > 0 ? (
              <span className="text-green-500">In stock</span>
            ) : (
              <span className="text-red-500">Out of stock</span>
            )}
          </p>
          {product.stock < 40 && (
            <p>
              Hurry up! only <b>{product.stock}</b> product left in stock!
            </p>
          )}
        </div>
        <div className="border-b border-b-slate-400 h-[50%] pt-[50px] flex flex-col items-start gap-[25px]">
          <p className="font-bold">Total Price: {total}</p>
          <p className="flex items-center justify-start gap-[20px] py-[5px]">
            <b>Quantity:</b>
            <CounterComponent
              stock={product.stock}
              counter={counter}
              setCounter={setCounter}
            />
          </p>
          <div className="flex items-center gap-[30px]">
            <button className="text-white py-[12px] px-[30px] rounded-3xl bg-orange-400">
              Add to Cart
            </button>
            <div
              onClick={handleLike}
              className="p-[10px] rounded-full bg-slate-400 flex items-center justify-center cursor-pointer"
            >
              <FaHeart size={25} color={isLiked ? "" : "white"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
