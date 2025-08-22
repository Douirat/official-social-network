'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import AuthentificationContext from "../lib/types"


const authContext = createContext<AuthentificationContext | undefined>(undefined)

//  create the auth provider:
export default function AuthProvider({ children }: { children: ReactNode }) {
   const [isLoggedIn, setIsLogged] = useState(false)
   const login = () => setIsLogged(true)
   const logout = () => setIsLogged(false)
   return (
      <authContext.Provider value={{ isLoggedIn, login, logout }}>{children}</authContext.Provider>
   )
}

// the ahthProvider user:
export const authUser = () => {
   const context = useContext(authContext)
   if (!context) throw new Error("useAuth must be used within AuthProvider")
   return context
}