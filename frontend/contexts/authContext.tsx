'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import AuthentificationContext from "../lib/types"


 const authContext = createContext<AuthentificationContext | undefined>(undefined)

 export default function AuthProvider({ children }: { children: ReactNode }){
    const [isLoggedIn, setIsLogged] = useState(false)

    const 

 }