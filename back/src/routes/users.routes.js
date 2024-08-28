import { Router } from "express"

const userRouter = Router()

userRouter.get("/users", funcaoquechamaosusers)

export default userRouter;