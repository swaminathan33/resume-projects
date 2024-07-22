import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setCart } from "./Slices/reducers/CartDetails";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Product = ({ link, name, price, item }) => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      setUid(null);
    }
  });
  const handleCart = (item) => {
    dispatch(setCart(item));
    const cartItem = {
      item,
      quantity: {
        id: item.id,
        quantity: 1,
      },
      uid: uid,
    };
    console.log("hi");
    addDoc(collection(db, "cart"), cartItem);
  };

  return (
    <div className="w-56 max-sm:w-full max-sm:mb-10 mb-5">
      <div className="bg-gray-100 flex items-center rounded-xl justify-center relative">
        <div className="absolute top-4 right-4 bg-white rounded-full p-1">
          <CiHeart fontSize={20} />
        </div>
        <img src={link} className="w-40 h-52" alt="" width={"300px"} />
      </div>
      <div className="flex items-start justify-between">
        <div className="w-5/6">
          <div className="name">{name}</div>
          <div className="price text-gray-900">${price}</div>
        </div>
        <div
          className="bg-yellow-500 p-3 rounded-full mt-1"
          onClick={() => handleCart(item)}
        >
          <div>
            <FaCartArrowDown color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
