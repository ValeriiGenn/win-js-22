import validatePassword from "./validate-password";

import { addUser } from "./api-servise";

addUser("mango");
//import apiServise from "./api-servise";

//console.log(validatePassword);

//console.log(validatePassword("qweqweq"));

//console.log(apiServise);

/*import {
    fetchAllUsers,
    fetchUserById,
    updateUserById,
    x as value,
    y as name,
} from "./api-servise";

console.log(fetchAllUsers);
console.log(fetchUserById);
console.log(updateUserById);
console.log(value);
console.log(name);*/
import * as apiService from "./api-servise";

console.log(apiService);