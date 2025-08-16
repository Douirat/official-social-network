import { DefaultSerializer } from "v8"

// Create the general type for authentification:
export interface AuthentificationContext {
    // user: (User | null)
    islogin: (user: any)=>void,
    // Logout: ()=>void
}

// Create a type for the user to help me with decifering user related data comming from the back end authenticate the user:
export default interface User {

}