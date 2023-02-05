import { createContext, useState } from "react"


const UserContext = createContext({
    user: {
        name : 'jhone do222e',
        email : 'jhon@email.com'
      }
});

UserContext.displayName = 'UserContext';

export default UserContext;