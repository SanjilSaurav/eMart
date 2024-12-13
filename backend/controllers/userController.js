import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route POST /api/users/login
//@acces Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
});

//@desc Register user
//@route POST /api/users
//@acces Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

//@desc Logout user / clear cookie
//@route POST /api/users/logout
//@acces Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

//@desc Get user profile
//@route GET /api/users/profile
//@acces Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

//@desc Update user profile
//@route PUT /api/users/profile
//@acces Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

//@desc Get Users
//@route GET /api/users
//@acces Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});

//@desc Get User by Id
//@route GET /api/users/:id
//@acces Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

//@desc Delete users
//@route DELETE /api/users/:id
//@acces Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
    res.send('delete users');
});

//@desc Update user
//@route PUT /api/users/:id
//@acces Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
});

export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUsers,
    getUserById,
    updateUser
}