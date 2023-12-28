
import React, { useState } from 'react';
import '../Styles/Select.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faGlassWhiskey, faCarrot, faTint, faBabyCarriage, faRibbon, faFemale, faWeight, faBalanceScale } from '@fortawesome/free-solid-svg-icons';



const dietaryOptions = [
  { id: 1, title: 'All', icon: faLeaf },
  { id: 2, title: 'Diary-free', icon: faGlassWhiskey },
  { id: 3, title: 'Vegan', icon: faCarrot },
  { id: 4, title: 'Diabetes', icon: faTint },
  { id: 5, title: 'Pregnancy', icon: faBabyCarriage },
  { id: 6, title: 'Cancer', icon: faRibbon },
  { id: 7, title: 'Fibroid', icon: faFemale },
  { id: 8, title: 'Weight loss', icon: faWeight },
  { id: 9, title: 'Weight gain', icon: faBalanceScale },
];

const Select = ({onSelect}) => {


    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleSelect = (option) => {
        try {
            console.log('Worked');
            if (selectedOptions.includes(option)) {
                // Remove the option if it's already selected
                setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
            } else {
                // Add the option if it's not selected
                setSelectedOptions([...selectedOptions, option]);
                console.log('Clicked:', option.title, 'Selected Options:', selectedOptions);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="">
            <div className="select">
                <h3>1. Select Dietary Option</h3>
                <p>Select your dietary options to be added to your meal timetable for your healthy living.</p>
            </div>

            <div className="card-container">
                {dietaryOptions.map((option) => (
                    <div key={option.id} className={`card ${selectedOptions.includes(option) ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                        <FontAwesomeIcon icon={option.icon} />
                        <p>{option.title}</p>
                    </div>
                ))}
            </div>
            {/* Callback to notify the parent component about the selected options */}
            {onSelect && onSelect(selectedOptions)}
        </div>
    );
};

export default Select;
