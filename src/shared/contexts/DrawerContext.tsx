import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOption: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

interface IDrawerProvider {
    children: ReactNode
}

interface IDrawerOption {
    icon: string;
    label: string;
    path: string;
}

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider = ({children}: IDrawerProvider) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
}