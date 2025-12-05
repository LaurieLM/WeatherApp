export default function SearchBar() {
    return (
        <div className="relative flex flex-col items-center">
            <img src="./src/assets/images/icon-search.svg" alt="Search Icon" className="absolute left-[42px] top-[12px] w-[6vw]"/>
            <input type="search" name="location" placeholder="Search for a place..." className="w-[90vw] h-[7.5vh] bg-[hsl(243_23%_24%)] text-center rounded-lg placeholder:text-[5.5vw] placeholder:text-[hsl(240_6%_70%)]" />
            <button type="submit" className="bg-[hsl(233_67%_56%)] w-[90vw] h-[7.5vh] rounded-lg text-center text-[5vw] mt-[2vh]">Search</button>
        </div>
    )
}