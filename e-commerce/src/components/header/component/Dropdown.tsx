'use client';
import { useState } from "react"
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

interface Option{
    value: string;
    label: string;
} 

interface DropdownProps{
    options: Option[];
    onSelect:(option:Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({options, onSelect}:DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(options[0] ?? null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleSelect = (option:Option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    }
    return (
        <div className="relative inline-block">
            <button
            type='button'
            className="px-4 py-2 text-white rounded-md flex items-center text-sm"
            onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label: selectedOption}
                {isOpen ? <FaChevronUp className="ml-2" /> :<FaChevronDown className="ml-2"/>}
            </button>
            {isOpen && (
            <div className="absolute left-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul>
                    {options.map((option)=> (
                        <li
                        key={option.value}
                        className="px-4 py-2 hover:bg-grey text-sm"
                        onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>))}
                </ul>
            </div>
            )}
        </div>
    );
};

export default Dropdown;