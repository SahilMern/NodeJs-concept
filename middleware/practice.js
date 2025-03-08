// const jwt = require("jsonwebtoken");
// const secret_key = "sahilyadavsahilyadavsahilyadavsahilyadav";  // Corrected the typo

// const practiceMiddleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     console.log(token, "token");
    
//     // Ensure the token exists and is in the correct format
//     if (!token) {
//       return res.status(401).json({
//         message: "No token found or invalid token format",
//         status: false,
//       });
//     }

   
    
//     // Verify the token
//     const verifyToken = jwt.verify(token, secret_key);
//     console.log(verifyToken, "verifytoken");

//     // Optionally, you can attach the verified token data to the request object
//     req.user = verifyToken;

//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return res.status(401).json({
//       message: "Invalid token",
//       status: false,
//     });
//   }
// };

// module.exports = { practiceMiddleware };


const tokenVerfiy = () => {
  
}