export const closeSession = () => {
    const user = {
        isLoggin: false,
        email: ""
    }
    const user_setting = localStorage.setItem("user", JSON.stringify(user));
    return user_setting;
};