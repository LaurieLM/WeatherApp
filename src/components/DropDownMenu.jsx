import { useState } from "react";

export default function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Units');

    // Options grouped by category
    const optionsGroups = [
        {
            label: 'Température',
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
            label: 'Précipitation',
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
                {selected}
                <svg 
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-1 w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    {optionsGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            {/* Titre du groupe */}
                            <div>
                                {group.label}
                            </div>

                            {/* Options du groupe */}
                            {group.options.map(option => (
                                <div
                                    key={option.value}
                                    onClick={() => {
                                        setSelected(option.label);
                                        setIsOpen(false);
                                    }}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
