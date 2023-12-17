import { createContext, useState, useMemo } from 'react';

export const ModelContext = createContext({});

export const ModelProvider = ({ children }) => {
    const [models, setModels] = useState([]);

    const context = useMemo(() => ({
        models,
        setModels,
    }), [models, setModels]);

    return (
        <ModelContext.Provider value={context}>
            {children}
        </ModelContext.Provider>
    )
};