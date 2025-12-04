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
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <img src="./src/assets/images/icon-units.svg" alt="" className="w-[4.5vw] absolute right-18 top-2" />
                {selected}
                <span>▼</span>
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
