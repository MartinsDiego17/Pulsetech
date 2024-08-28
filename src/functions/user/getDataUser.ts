export const getDataUser = () => {
    const user = localStorage.getItem("user");
    const current_user = user ? JSON.parse(user) : {
        isLoggin: false,
        email: ""
    };
    
    return current_user;
};
