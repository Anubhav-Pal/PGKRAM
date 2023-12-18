import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import saveicon from '../assets/saveicon.svg';
import shareicon from '../assets/shareicon.svg';
import { Link } from 'react-router-dom';

const JobDisplay = (props) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    const isJobSaved = savedJobs.some(savedJob => savedJob && savedJob.id && savedJob.id === props.id);
  
    setIsSaved(isJobSaved);
  }, [props.id, setIsSaved]);

  const handleRemove = () => {
    if (props.onRemove) {
      props.onRemove();
    }
  };

  const handleSave = () => {
    if (isSaved) {
      toast.warning('Job already saved!', { position: 'bottom-right' });
    } else {
      if (props.onSave) {
        props.onSave();
        setIsSaved(true);
        toast.success('Job saved!', { position: 'bottom-right' });
      }
    }
  };

  return (
    <div className='bg-white flex p-4 justify-center items-center my-2 rounded-lg'>
      <Link to='/company' target='_blank'>
        <div>{props.icon}</div>
      </Link>

      <div className='ml-4 w-4/5'>
        <div className='font-semibold'>{props.position}</div>
        <div className='flex text-[13px]'>
          <div>{props.company}</div>
          <div className='ml-10'>{props.medium}</div>
        </div>
        <div className='text-[14px]'>{props.text}</div>
      </div>

      <div>
        <Link to="/apply" target='_blank'>
          <button className='bg-[#4f2ce0] w-4/5 text-white mx-4 px-2 mb-3 rounded-md py-1 '>APPLY</button>
        </Link>
        <button onClick={handleRemove} className='bg-gray-300 w-4/5 mx-4 px-2 py-1  text-white rounded-md '>DON'T RECOMMEND</button>
      </div>

      <div>
        <button onClick={handleSave}>
          <img className='mb-4 bg-[#ED9017] rounded-md p-2' src={saveicon} alt="saveicon" />
        </button>
        <button>
          <img className='bg-[#ED9017] rounded-md p-2' src={shareicon} alt="shareicon" />
        </button>
      </div>
    </div>
  );
}

export default JobDisplay;
