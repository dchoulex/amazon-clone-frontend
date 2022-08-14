import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import CategoryButton from "./category-button";

function SearchBar() {
    return (
        <div className="flex flex-col justify-center flex-1">
            <div className="mx-2 flex flex-1 h-[36px] items-center">
                <div className="flex flex-1">
                    <CategoryButton />

                    <InputBase className="bg-white min-w-[250px] flex flex-1 px-3"/>
                </div>

                <Button className="bg-orange-300 rounded-l-none border-orange-300 border-2 border-solid" startIcon ={<SearchIcon sx={{color: "black"}} />} />
            </div> 
        </div>
    )
};

export default SearchBar;