const createContext
= require('react').createContext;

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;