import React from 'react';

const Skillai = (props) => {
  const { skill, isSelected, onClick } = props;

  return (
    <div
      className={`cursor-pointer  border-2 py-1 px-2 inline rounded-lg mx-4 ${isSelected ? 'bg-[#4329EA] text-white' : 'border-black'}`}
      onClick={onClick}
    >
      {skill}
    </div>
  );
}

export default Skillai;
