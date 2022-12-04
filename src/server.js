import Express from "express";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";

const app = Express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
