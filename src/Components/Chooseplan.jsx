import React, { useState } from 'react';
import '../Styles/Chooseplan.css';

const Chooseplan = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  // Callback function to update selectedOptions state
  const handleSelect = (options) => {
    console.log('Selected Options:', options);
    setSelectedOptions(options);

  };

  const planOptions = [
    { id: 1, title: '2' },
    { id: 2, title: '4' },
  ];
  const planOptionss = [
    { id: 3, title: '2' },
    { id: 4, title: '3' },
    { id: 5, title: '4' },
    { id: 6, title: '5' },
    { id: 7, title: '6' },
  ];

  return (
    <div className="container">
      <div className='select'>
        <h3>2. Choose plan size & meal delivery type</h3>
        <p>Select the number of people eating the meal and the number of serving.</p>
      </div>


      <div className="grid-container">
        <div className="column1">
          <div className='box1'>
            <p>Number of serving:</p>
            <div className='cardd-container'>
              {planOptions.map((option) => (
                <div key={option.id} className="cardd">
                  <h3>{option.title}</h3>
                </div>
              ))}
            </div>

          </div>
          <div className='box2'>
            <p>Number of serving:</p>

            <div className='cardd1-container'>
              {planOptionss.map((option) => (
                <div key={option.id} className="cardd">
                  <h3>{option.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="column2">
          <h3>Selection Summary:</h3>
          <p>See the summary and the pricing for the lists of your selection.</p>

          {/* Render selected options as buttons with an "X" sign */}
          <div className='btn'>
            {selectedOptions.map((option) => (
              <button key={option.id} className="selected-btn">
                {option.title} <span onClick={() => handleSelect(selectedOptions.filter((selected) => selected !== option.title))}>X</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseplan;

