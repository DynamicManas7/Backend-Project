import {asyncHandler} from '../utlis/asyncHandler.js';
const registerUser= asyncHandler(async(req,res)=>{
    res.status(500).json({
        message:"ok"
    })
})
export {registerUser}