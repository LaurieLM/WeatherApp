import CustomSelect from "./DropDownMenu";

export default function NavBar() {
    return (
        <header className="h-[10vh] p-[1rem]">
            <nav className="flex justify-between items-center relative">
                <img src="./src/assets/images/logo.svg" alt="logo" className="w-35 h-12" />
                <CustomSelect />
            </nav>
        </header>
    )
}
