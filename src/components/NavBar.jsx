export default function NavBar() {
    return (
        <header className="h-[10vh] p-[1rem]">
            <nav className="flex justify-between items-center">
                <img src="./src/assets/images/logo.svg" alt="logo" className="w-35 h-12" />
                <select name="filter" className="w-[20vw] h-[6vh] bg-[hsl(243_23%_30%)] text-[hsl(0_0%_100%)] rounded-md p-2">
                    <option value="">Units</option>
  
                    <optgroup label="Température">
                        <option value="celsius">Celsius (°C)</option>
                        <option value="fahrenheit">Fahrenheit (°F)</option>
                    </optgroup>
  
                    <optgroup label="Wind Speed">
                        <option value="kmh">Km/h</option>
                        <option value="mph">Mph</option>
                    </optgroup>
  
                    <optgroup label="Précipitation">
                        <option value="mm">Millimeters (mm)</option>
                        <option value="in">Inches (in)</option>
                    </optgroup>
                </select>
            </nav>
        </header>
    )
}