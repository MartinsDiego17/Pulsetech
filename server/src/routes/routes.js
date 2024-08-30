const { Router } = require('express');

const { handlerGetMeets } = require('../handlers/meets/handlerGetMeets');
const { handlerGetUsers } = require('../handlers/users/handlerGetUsers');
const handlerCreateUser = require('../handlers/users/handlerCreateUser');
const handlerCreateMeet = require('../handlers/meets/handlerCreateMeet');
const { handlerGetMeetById } = require('../handlers/meets/handlerGetMeetById');
const { handlerGetUserById } = require('../handlers/users/handlerGetUserById');
const handlerValidateUser = require('../handlers/users/handlerValidate');

const router = Router();

//MEETS
router.get("/api/meets/getMeets", handlerGetMeets);
router.get("/api/meets/:id", handlerGetMeetById);
router.post("/api/meets/createMeet", handlerCreateMeet);


//USERS
router.get("/api/users/getUsers", handlerGetUsers);
router.get("/api/users/:id", handlerGetUserById);
router.post("/api/users/validate", handlerValidateUser);
router.post("/api/users/createUser", handlerCreateUser);

module.exports = router;