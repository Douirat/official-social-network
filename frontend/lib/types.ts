// Create the general type for authentification:
export default interface AuthentificationContext {
   isLoggedIn: boolean;
   login: ()=>void;
   logout: ()=>void;
}

// Create a type for the user to help me with decifering user related data comming from the back end authenticate the user:
export interface User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    avatar?: string;
    nickname?: string;
    aboutMe?: string;
}
