import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

interface IDrawerProvider {
    children: ReactNode
}

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider = ({children}: IDrawerProvider) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
}