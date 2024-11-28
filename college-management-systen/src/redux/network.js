import API from '../api/axiosInstance';

export const msNetwork = {
    getLoggedUser: ({reg_emp_id, password}) => {
        console.log('final',reg_emp_id, password);
        return {
            method: 'get',
            url: API.get(`http://3.86.242.149:8000/api/users/?reg_emp_id=${reg_emp_id}&password=${password}`)
        }
    }
};
