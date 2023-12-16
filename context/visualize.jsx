import { createContext, useState, useMemo } from 'react'

export const VisualizeContext = createContext({
    columns: null,
    setColumns: () => {},
    sources: null,
    setSources: () => {},
    selectedSource: null,
    setSelectedSource: () => {},
    selectedColumns: null,
    setSelectedColumns: () => {},
    isLoading: false,
    setIsLoading: () => {},
    chartData: null,
    setChartData: () => {},
})

export const VisualizeProvider = ({ children }) => {
    const [sources, setSources] = useState([])
    const [columns, setColumns] = useState([])
    const [selectedSource, setSelectedSource] = useState('')
    const [selectedColumns, setSelectedColumns] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [chartData, setChartData] = useState(null)

    const context = useMemo(() => ({
        columns,
        setColumns,
        selectedColumns,
        setSelectedColumns,
        sources,
        setSources,
        selectedSource,
        setSelectedSource,
        isLoading,
        setIsLoading,
        chartData,
        setChartData,
    }), [columns, selectedColumns, sources, selectedSource, isLoading, chartData])

    return (
        <VisualizeContext.Provider value={context}>
            {children}
        </VisualizeContext.Provider>
    )
}
