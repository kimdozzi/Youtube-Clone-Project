import Express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";
const videoRouter = Express.Router();

// params를 주기 전에 /upload와 같은 경로들을 상위에 지정해야 한다.
// parameter 취급을 해버리기 때문이다. (위치 설정 중요!)
// :id 보다 /upload가 밑에 있으면 upload가 id자리에 있어서 id라고 생각함. (주의)

videoRouter.get("/:id(\\d+)", see); // 정규표현식을 사용해 숫자만 받아내면 상관없다.
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
