import { createContext,PropsWithChildren, useContext, useState } from "react"


type HistoryCtx = {
    openHisoty:Boolean,
    toggleHistory:()=>void,
}

export const HistoryContext = createContext<HistoryCtx>({} as HistoryCtx);
export const useHistoryContext = ()=> useContext(HistoryContext)
 const HistoryContextWrapper = ({children}:PropsWithChildren)=>{
    const [openHisoty,setOpenHistory] = useState<Boolean>(false)
    const toggleHistory = ()=>setOpenHistory(inital => !inital)
    return <HistoryContext.Provider value={{
        openHisoty,toggleHistory
    }}>
        {children}
    </HistoryContext.Provider>
}

export default HistoryContextWrapper