interface Datauser {
    id: number
    email: string
    password: string
}

export const addUser = (dataUser : Datauser) => {
    const user_to_storage = {
        id: dataUser.id,
        isLoggin: true,
        email: dataUser.email
    };

    const user_setting = localStorage.setItem("user", JSON.stringify(user_to_storage));
    return user_setting;
};
