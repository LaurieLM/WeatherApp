import { useState } from "react";

export default function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]); // Tableau pour stocker plusieurs valeurs 

    // Options groupées par catégorie
    const optionsGroups = [
        {
            options: [
                { value: 'imperial', label: 'Switch to Imperials' },
            ]
        },
        {
            label: 'Temperature',
            options: [
                { value: 'celsius', label: 'Celsius (°C)' },
                { value: 'fahrenheit', label: 'Fahrenheit (°F)' }
            ]
        },
        {
            label: 'Wind Speed',
            options: [
                { value: 'kmh', label: 'Km/h' },
                { value: 'mph', label: 'Mph' }
            ]
        },
        {
            label: 'Precipitation',
            options: [
                { value: 'mm', label: 'Millimeters (mm)' },
                { value: 'in', label: 'Inches (in)' }
            ]
        }
    ]

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-[26vw] h-[5vh] bg-[hsl(243_23%_24%)] text-[hsl(0_0%_100%)] text-[4vw] px-2 py-1 rounded-md">
                <img src="./src/assets/images/icon-units.svg" alt="" className="w-[4.5vw] absolute right-18 top-1.5" />
                Units
                <svg 
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 w-[44vw] mt-[2vw] p-[2vw] bg-[hsl(243_23%_24%)] rounded-lg">
                    {optionsGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            {/* Ligne séparatrice AVANT Wind Speed et Precipitation */}
                            {groupIndex > 1 && <hr className="border-t-[0.5px] border-[hsl(240_6%_70%)]" />}

                            {/* Titre du groupe */}
                            <div className="text-[3vw] text-[hsl(240_6%_70%)] px-[2vw]">
                                {group.label}
                            </div>

                            {/* Options du groupe */}
                            {group.options.map(option => (
                                <div
                                    key={option.value}
                                    onClick={() => {
                                        // Si déjà sélectionnée, on la retire, sinon on l'ajoute
                                        if (selectedValues.includes(option.value)) {
                                            setSelectedValues(selectedValues.filter(v => v !== option.value));
                                        } else {
                                            setSelectedValues([...selectedValues, option.value]);
                                        }
                                    }} className={`text-[hsl(0_0%_100%)] text-[4vw] px-[2vw] my-[2vw] cursor-pointer ${selectedValues.includes(option.value) ? 'bg-[hsl(243_27%_20%)] rounded-md flex items-center justify-between' : 'hover:bg-[hsl(243_27%_20%)] rounded-md'}`}>
                                    {option.label}

                                    {/* Checkmark si option sélectionnée */}
                                    {selectedValues.includes(option.value) && (
                                        <span className="text-white text-[4vw]">✓</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
