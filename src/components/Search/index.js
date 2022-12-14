import { useState } from "react";
import {SearchClearWrapper, SearchInput, SearchWrapper} from "./styles";
import {IoClose} from "react-icons/io5"; 

export const Search = ({searchTerm = "" }) => {

    const [searchText, setSearchText] = useState(searchTerm);

    const handlerChangeText = (event) => {
        setSearchText(event.target.value);
    } 

    const clearSearchHandler = (event) => {
        setSearchText("");
    }   

    return (
        <SearchWrapper>
            <SearchInput 
                value={searchText} 
                onChange={handlerChangeText} 
                type="text" 
                placeholder="Buscar..."/>
            <SearchClearWrapper 
                onClick={clearSearchHandler} 
                hasText={searchText !== ""} >
                <IoClose />
            </SearchClearWrapper>
        </SearchWrapper>
    )
};