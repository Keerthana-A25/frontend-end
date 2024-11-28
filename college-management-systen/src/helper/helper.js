import {registerUser} from "../constant/constant";

export const checkRegisterUser = (data) => {


    // Find a matching user
    const matchedUser = registerUser?.find(
        (user) => user.emp_reg_id === data?.emp_reg_id && user.password === data?.password
    );

// user login checking here
    if (matchedUser) {
        return matchedUser;
    } else {
        return "Invalid User";
    }
};


export const updateProfile = (currentUser, newData) => {
    return { ...currentUser, ...newData };

};



export const isValidElement = (data) => {
    return data !== null && data !== undefined && data !== "Invalid User";
};
