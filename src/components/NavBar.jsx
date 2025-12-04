export default function NavBar() {
    return (
        <header className="h-[10vh] p-[1rem]">
            <nav className="flex justify-between items-center relative">
                <img src="./src/assets/images/logo.svg" alt="logo" className="w-35 h-12" />
                
                <div className="relative">
                    <img src="./src/assets/images/icon-units.svg" alt="" className="w-[4.5vw] absolute right-17 top-2.5" />
                    <span className="absolute left-8 top-1.5 text-[hsl(0_0%_100%)]">Units</span>
                    <select name="filter" className="w-[24vw] h-[6vh] bg-[hsl(243_23%_30%)] text-[hsl(0_0%_100%)] rounded-md p-2">
                    
                        <optgroup label="Température">
                            <option value="" hidden></option>
                        <option value="celsius">Celsius (°C)</option>
                        <option value="fahrenheit">Fahrenheit (°F)</option>
                    </optgroup>
  
                    <optgroup label="Wind Speed">
                        <option value="" hidden></option>
                        <option value="kmh">Km/h</option>
                        <option value="mph">Mph</option>
                    </optgroup>
  
                        <optgroup label="Précipitation">
                            <option value="" hidden></option>
                        <option value="mm">Millimeters (mm)</option>
                        <option value="in">Inches (in)</option>
                    </optgroup>
                </select>
                </div>



                
            </nav>
        </header>
    )
}