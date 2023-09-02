import { usePathname, useRouter } from "next/navigation"
import { PropsWithChildren,createContext, useContext, useEffect, useState } from "react"

type contextType = {
    currentItem?:string | null,
    setCurrentitem:(currentItem:string)=> void
}


const navCtxProv = createContext <contextType >({currentItem:"",setCurrentitem:(currentItem:string)=>{}})
export const useNavCtx = ()=>useContext(navCtxProv)

export const NavCtx =({children}:PropsWithChildren)=>{
    const name = usePathname()
    const usefulname = name?.toLowerCase()
    const [currentItem,saveCurrentItem] = useState<contextType['currentItem']>(usefulname)
    const setVal = (currentItem:string)=>saveCurrentItem(currentItem)
    useEffect(()=>{
        console.log({usefulname})
    },[name])
    return <navCtxProv.Provider value={{
        currentItem,setCurrentitem:setVal
    }}>
        {children}
    </navCtxProv.Provider>
}