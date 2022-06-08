import React, {createContext,useState,useContext} from 'react'

//creating context for the daskboard

export function DashContext({children}){
    //states
const [IsDashboardOpen, setIsDashboardOpen] = useState(true)
const [IsStoreContexOpen, setIsStoreContexOpen] = useState(false)
const [IsSalesContexOpen, setIsSalesContexOpen] = useState(false)
const [IsDruglistContexOpen, setIsDruglistContexOpen] = useState(false)

        return(
            <DashboardContex.Provider value={IsDashboardOpen}>
                <StoreContex.Provider value={IsStoreContexOpen}>
                    <SalesContex.Provider value={IsSalesContexOpen}>
                        <DruglistContex.Provider value={IsDruglistContexOpen}>
                            <DashboardContexset.Provider value={setIsDashboardOpen}>
                                <StoreContexset.Provider value={setIsStoreContexOpen}>
                                    <SalesContexset.Provider value={setIsSalesContexOpen}>
                                        <DruglistContexset.Provider value={setIsDruglistContexOpen}>
                                            {children}
                                        </DruglistContexset.Provider>
                                    </SalesContexset.Provider>
                                </StoreContexset.Provider>
                            </DashboardContexset.Provider>
                        </DruglistContex.Provider>
                    </SalesContex.Provider>
                </StoreContex.Provider>
            </DashboardContex.Provider>
        )
}
//custom contex
export function DruglistDash(){
    return useContext(DruglistContex)
}
export function DruglistDashset(){
    return useContext(DruglistContexset)
}
export function DashboardDash(){
    return useContext(DashboardContex)
}
export function DashboardDashset(){
    return useContext(DashboardContexset)
}
export function SaleDash(){
    return useContext(SalesContex)
}
export function SalesDashset(){
    return useContext(SalesContexset)
}
export function StoreDash(){
    return useContext(StoreContex)
}
export function StoreDashset(){
    return useContext(StoreContexset)
}

// context
export const DruglistContex = createContext()
export const StoreContex = createContext()
export const SalesContex = createContext()
export const DashboardContex = createContext()
export const DruglistContexset = createContext()
export const StoreContexset = createContext()
export const SalesContexset = createContext()
export const DashboardContexset = createContext()