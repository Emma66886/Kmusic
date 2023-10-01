import { createContext,PropsWithChildren, useContext, useState } from "react"


type MenuCtx = {
    open:Boolean,
    toggleMenu:()=>void,
}

export const MenuContext = createContext<MenuCtx>({} as MenuCtx);
export const useMenuContext = ()=> useContext(MenuContext)
 const MenuContextWrapper = ({children}:PropsWithChildren)=>{
    const [open,setOpen] = useState<Boolean>(false)
    const toggleMenu = ()=>setOpen(inital => !inital)
    return <MenuContext.Provider value={{
        open,toggleMenu
    }}>
        {children}
    </MenuContext.Provider>
}

export default MenuContextWrapper