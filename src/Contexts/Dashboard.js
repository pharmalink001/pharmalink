import React, {createContext,useState} from 'react'

//creating context for the daskboard

export function DashContext({children}){
    //states
const [IsDashboardOpen, setIsDashboardOpen] = useState(false)
const [IsStoreContexOpen, setIsStoreContexOpen] = useState(false)
const [IsSalesContexOpen, setIsSalesContexOpen] = useState(false)
const [IsDashboardOpen, setIsDashboardOpen] = useState(false)

        return(
            <DashboardContex.Provider>

            </DashboardContex.Provider>
        )
}

// context
export const DruglistContex = createContext()
export const StoreContex = createContext()
export const SalesContex = createContext()
export const DashboardContex = createContext()