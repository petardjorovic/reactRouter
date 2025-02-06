import axios from "axios";

class PostServices {
  static getSingleProduct = () =>
    axios.get("https://dummyjson.com/products/28");
}

export default PostServices;
