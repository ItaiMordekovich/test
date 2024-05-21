import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';


interface SearchContextType {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}


const SearchContext = createContext<SearchContextType>({
    searchTerm: '',
    setSearchTerm: () => { },
});


export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};


export const useSearch = () => {
    return useContext(SearchContext);
};
