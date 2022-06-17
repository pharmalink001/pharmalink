import React,{useContext,createContext,useState} from 'react'

export function LoginContext({children}){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
  return (
  <>
    <Email.Provider value={email}>
       <Emailset.Provider value={setemail}>
            <Password.Provider value={password}>
                <Passwordset.Provider value={setpassword}>
                    {children}
                </Passwordset.Provider>
            </Password.Provider>
       </Emailset.Provider>
    </Email.Provider>
  </>
  )
}
//custom hooks for login context
export function Emailcon(){
    return useContext(Email)
}
export function Emailsetcon(){
    return useContext(Emailset)
}
export function Passwordcon(){
    return useContext(Password)
}
export function Passwordsetcon(){
    return useContext(Passwordset)
}


export const Email = createContext()
export const Emailset = createContext()
export const Password = createContext()
export const Passwordset = createContext()