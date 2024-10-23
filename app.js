import express from "express";
import compression from "compression";
import productRoutes from "./src/routes/product.route.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(compression());

app.use("/products", productRoutes);

export default app;
