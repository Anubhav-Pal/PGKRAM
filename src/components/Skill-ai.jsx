import React from 'react';

const Skillai = (props) => {
  const { skill, isSelected, onClick } = props;

  return (
    <div className='flex w-max inline '>
    <div
      className={`inline cursor-pointer my-2 border-2 py-1 px-2 rounded-lg mx-4 ${isSelected ? 'bg-[#4329EA] text-white' : 'border-black'}`}
      onClick={onClick}
    >
      {skill}
    </div>
    </div>
  );
}

export default Skillai;
