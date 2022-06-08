import react,{createContext,useState,useContext} from 'react'

const Navcontext = createContext()
const Updatenav = createContext()

export function Navhook(){
    return useContext(Navcontext)
}
export function Setnavhook(){
    return useContext(Updatenav)
}
export function NavCont({children}){
    const [active, setactive] = useState(false)
    return(
        <>
        <Updatenav.Provider value={setactive}>
        <Navcontext.Provider value={active}> 
            {children}    
        </Navcontext.Provider>
        </Updatenav.Provider>
        </>
    )
}