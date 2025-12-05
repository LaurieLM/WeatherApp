import { useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "../api/fetchLocation";
    
export default function SearchBar() {
    const [text, setText] = useState("")
    const [shouldSearch, setShouldSearch] = useState(false)

    const { data } = useQuery({
        queryKey: ["location", text],
        queryFn: () => fetchLocation(text),
        enabled: shouldSearch && text.length > 0

    });

    const locationSearch = () => {
        setShouldSearch(true);
    }
    console.log(data)
    return (
        <div className="relative flex flex-col items-center">
            <img src="./src/assets/images/icon-search.svg" alt="Search Icon" className="absolute left-[42px] top-[12px] w-[6vw]"/>
            <input
                type="search"
                maxLength={20}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search for a place..."
                className="w-[90vw] h-[7.5vh] bg-[hsl(243_23%_24%)] text-center rounded-lg placeholder:text-[5.5vw] placeholder:text-[hsl(240_6%_70%)] outline-none" />
                
            <button type="submit"
                onClick={locationSearch}
                className="bg-[hsl(233_67%_56%)] w-[90vw] h-[7.5vh] rounded-lg text-center text-[5vw] mt-[2vh] outline-none">
                Search
            </button>
        </div>
    )
}