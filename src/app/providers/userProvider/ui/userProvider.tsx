import {createContext, ReactNode, useEffect, useState} from "react";
import {userContextType, userType} from "../types/types";

export const userContext = createContext<userContextType>({});

import {Loader} from "src/widgets/Loader/Loader";
import {loadData} from "src/shared/lib/loadData";
import {ErrorBlock, ErrorType} from "src/shared/ui/ErrorBlock/ErrorBlock";
interface propsType {
    children: ReactNode
}
export const UserProvider = (props: propsType) => {
    const [contextValue, setContextValue] = useState<userContextType>({});
    const [isInit, setIsInit] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType | undefined>(undefined);
    const initUser = async ()=>{
        setError(undefined);
        setIsInit(true);
        const res = await loadData<userType>("user/initUser.php", setError, "get", undefined, "auth");
        if (res.status==='error') {
            if (res.error?.code==='NotAuth') document.location.href="/auth/?backUrl=/ozon/";
        }
        res.data?.ID && setContextValue({user: {ID: res.data.ID}})
        setIsInit(true)
    }
    useEffect(()=>{
        localStorage.setItem('DevUserId', '2');
        initUser().then();
    }, [])

    if (!isInit) return <Loader />
    if (error) return <ErrorBlock error={error}/>
    return (
        <userContext.Provider value={contextValue}>
            {props.children}
        </userContext.Provider>
        )

};
