const { Router } = require('express');

const { handlerGetMeets } = require('../handlers/meets/handlerGetMeets');
const { handlerGetUsers } = require('../handlers/users/handlerGetUsers');
const handlerCreateUser = require('../handlers/users/handlerCreateUser');
const handlerCreateMeet = require('../handlers/meets/handlerCreateMeet');
const { handlerGetMeetById } = require('../handlers/meets/handlerGetMeetById');
const { handlerGetUserById } = require('../handlers/users/handlerGetUserById');

const router = Router();

//MEETS
router.get("/meets/getMeets", handlerGetMeets);
router.get("/meets/:id", handlerGetMeetById);
router.post("/meets/createMeet", handlerCreateMeet);


//USERS
router.get("/users/getUsers", handlerGetUsers);
router.get("/users/:id", handlerGetUserById);
router.post("/users/createUser", handlerCreateUser)

module.exports = router;