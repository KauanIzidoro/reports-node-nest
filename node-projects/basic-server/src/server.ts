import express from "express";
import bookRoutes from "./routes";
// import YAML from 'yamljs'

// const swaggerFile = YAML


const app = express();
const PORT = 3333;

app.use(express.json());
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});