/** SIMPLE WRAPPER TO EXTRACT THE CONTEXT DATA */
'use client'

import { cloneElement, useContext } from "react";
import { UserContext } from "./clientComponent";

export default function CtxExtractor({children}:any) {
    const data = useContext(UserContext);

    if(!children){
        return <p> No children data !!</p>
    }

    // TO VALIDATE
    const loadedChild = cloneElement(children, {
        data
      });

    //return <SCCtxConsumer data={data} />
    return <>{loadedChild}</>
}