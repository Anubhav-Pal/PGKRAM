import React, { useEffect, useState } from 'react';
import JobDisplay from '../../components/JobDisplay';

const AppliedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const savedJobsFromLocalStorage = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setSavedJobs(savedJobsFromLocalStorage);
  }, []);

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-4'>Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        savedJobs.map(savedJob => {
          // Check if the saved job has content before rendering
          if (savedJob.icon && savedJob.position && savedJob.company && savedJob.medium && savedJob.text) {
            return (
              <JobDisplay
                key={savedJob.id}
                id={savedJob.id}
                icon={savedJob.icon}
                position={savedJob.position}
                company={savedJob.company}
                medium={savedJob.medium}
                text={savedJob.text}
                onSave={() => {/* handle save action if needed */}}
              />
            );
          } else {
            return null; // Skip rendering if the saved job doesn't have complete content
          }
        })
      )}
    </div>
  );
}

export default AppliedJobs;
