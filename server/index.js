import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoutes.js";
import userRoute from "./routes/userRoutes.js";
import connectdb from "./dbconfig/connectdb.js";

const app = express();

//connect db
connectdb();

//middlewares
// app.use(cors());
app.use(cors({ origin: "https://admingametheory.netlify.app" }));
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://admingametheory.netlify.app/"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(express.json());

//routes
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/user", userRoute);

//img uploads
app.use("uploads/", express.static("uploads"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
