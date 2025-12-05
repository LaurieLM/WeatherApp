export default function SearchBar() {
    return (
        <div className="relative flex flex-col items-center">
            <img src="./src/assets/images/icon-search.svg" alt="Search Icon" className="absolute left-[42px] top-[12px] w-[6vw]"/>
            <input type="search" name="location" placeholder="Search for a place..." className="w-[90vw] h-[7.5vh] bg-[hsl(243_23%_24%)] text-center rounded-md placeholder:text-[5.5vw]" />
            <button type="submit">Search</button>
        </div>
    )
}