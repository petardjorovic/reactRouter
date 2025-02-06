import React, { useEffect, useState } from "react";
import SingleProductCardComponent from "../components/SingleProductCardComponent";
import PostServices from "../services/postServices";
import { toast } from "react-toastify";
import LoadingComponent from "../components/LoadingComponent";

function ProductsPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    PostServices.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        toast.success("Data arrived!");
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-[95%] mx-auto">
      <h2 className="mt-[20px] text-xl">Products Page</h2>
      {isLoaded ? (
        <SingleProductCardComponent product={singleProduct} />
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default ProductsPage;
