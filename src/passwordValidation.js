export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   
   */
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

//length
if(password.length !== 10) return false

//lower character & upperCharacter & one number
const lowerRegex = /[a-z]/
const upperRegex = /[A-Z]/
const numRegex = /[0-9]/
const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

if(!lowerRegex.test(password) || 
   !upperRegex.test(password) ||
   !numRegex.test(password)   ||
   specialRegex.test(password)) {
      return false; 
   }
   
   //password doesn't have ascending or descending order of numbers
   if(!checkingNumberOrder(password)) return false

 
  return true
}

function  checkingNumberOrder(password){
   const numberRegex = /\d+/g
   const numberPatterns = password.match(numberRegex)
   
   for(const num of numberPatterns){
       if(num.length) continue;
       const arr = [...num]
       const asc =  arr.every((val,i) => i===0 || val > arr[i-1])
       const desc =  arr.every((val,i) => i===0 || val < arr[i-1])
       
       
       
       const monotonic = asc || desc ;
       
       if(monotonic) return false
   }
    const noDuplicates = [new Set(...password)]
     
   return true
}

