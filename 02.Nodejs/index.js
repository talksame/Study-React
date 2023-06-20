import sample from "./sample.js";
import lodash from "lodash";

const arr = [1, 2, 3, 4, 5];
const uniqueArr = lodash.uniqBy(arr);

console.log(uniqueArr);
