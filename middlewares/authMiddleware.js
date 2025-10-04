import JWT from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    // console.log("Auth Header:", authHeader); // Debugging line
    if (!authHeader) {
      return res
        .status(401)
        .send({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Remove "Bearer"
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized User",
        });
      }

      req.body.id = decoded.id;
      next();
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error" });
  }
};

export default authMiddleware;
