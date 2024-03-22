import { createContext, useContext } from "react"
import { CONTENT } from "../constant"


export const ContentContext = createContext(CONTENT.HOME)

export default function useContentContext(){
    const content = useContext(ContentContext)
    return content 
}
