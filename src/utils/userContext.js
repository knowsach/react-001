import { createContext } from "react"

const UserContext = createContext({
    user: {
        name : "Jhon Doe",
        email : 'hon@email.com'
    }
});

UserContext.displayName = 'UserContext';

export default UserContext;