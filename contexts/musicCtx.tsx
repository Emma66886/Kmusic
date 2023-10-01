import { PropsWithChildren,createContext, useContext, useState } from "react"

export type CurrentItem = {
    id?:string,
    name?:string,
    track?:number,
    trackName:string,
    source?:string,
}
type contextType = {
    currentItem?:CurrentItem,
    setCurrentitem:(currentItem:CurrentItem)=> void,
}


const musicCtxProv = createContext <contextType >({} as contextType)
export const useMusicCtx = ()=>useContext(musicCtxProv)

export const MusicCtx =({children}:PropsWithChildren)=>{
    const [currentItem,saveCurrentItem] = useState<CurrentItem>({
        trackName:"",
        id:"0",
        name:"",
        track:0,
        source:""
    })
    const setVal = (currentItem:CurrentItem)=>saveCurrentItem(currentItem)
    return <musicCtxProv.Provider value={{
        currentItem,setCurrentitem:setVal
    }}>
        {children}
    </musicCtxProv.Provider>
}