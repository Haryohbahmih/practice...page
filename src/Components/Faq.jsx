
import React, { useState } from 'react';
import '../Styles/Faq.css';

function FaqItem({ question, answer }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={toggleAnswer}>
        <div className="question">Q: {question}</div>
        <div className={`arrow-down ${isOpen ? 'open' : ''}`}>&#9660;</div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};





const Faq = () => {
  return (
    <div>
      <div className='faq-container'>
        <div className='faq-title'>
          <h2>Frequently <span>Asked</span> Questions</h2>
        </div>
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
        <FaqItem
          question=" Lorem ipsum dolor?"
          answer='sit amet consectetur adipisicing elit. Minus aliquam autem cum obcaecati'
        />
      </div>
    </div>
  )
}

export default Faq


