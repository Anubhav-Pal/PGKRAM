import React,{useState} from 'react'
import RectangleDisplay from './RectangleDisplay'
import LineDisplay from './LineDisplay'
import Skill from './Skill'
import CircularProgressBar from './CircularProgressBar'
import Navbar from './Navbar'
const JobDetails = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [availabilityText, setAvailabilityText] = useState('');

  const handleApplyClick = () => {
    // Open the popup
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    // Close the popup
    setIsPopupOpen(false);
    // Reset user choice and availability text
    setUserChoice(null);
    setAvailabilityText('');
  };

  const handleApplyNow = () => {
    // Check if the user has made a choice
    if (userChoice === 'yes' || (userChoice === 'no' && availabilityText.trim() !== '')) {
      // Apply logic goes here
      // For now, just close the popup and set isApplied to true
      setIsApplied(true);
      setIsPopupOpen(false);
      // Reset user choice and availability text
      setUserChoice(null);
      setAvailabilityText('');
    }
  };

  const handleOptionChange = (choice) => {
    setUserChoice(choice);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pgrkam-backend.onrender.com/Job-data/Featured/${documentId}`);
        setDisplay(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  console.log(display)
  return (
    <div>
      <Navbar />

      <div className={`p-16 bg-gray-100 ${isPopupOpen ? 'overflow-hidden' : ''}`}>

        {/* about job */}
        <div className=' bg-white'>

          <div>
            {/* company heading */}
            <div className='flex mx-auto justify-center items-center shadow-lg p-4 mb-4'>
              <div>icon</div>
              <div className='ml-10'>
                <div className='font-semibold text-[15px]'>Product Designer</div>
                <div className='text-gray-700 text-[12px]'>Facebook CA, USA</div>

                <div className='my-3 font-semibold'>Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay..</div>

                <div className='text-blue-800'>Full-time. Mid senior level</div>
                <div className='text-blue-800'>10,230 + employees. Software Development</div>

                <div className='my-4 flex '>
                  {/* Apply button */}
                  {!isApplied ? (
                    <button
                      className={`rounded-lg ${isApplied ? 'bg-gray-500' : 'bg-[#ED9017]'} text-white py-1 px-5`}
                      onClick={handleApplyClick}
                      disabled={isApplied}
                    >
                      {isApplied ? 'Applied' : 'Apply'}
                    </button>
                  ) : (
                    <button className="rounded-lg bg-gray-500 text-white py-1 px-5" disabled>
                      Applied
                    </button>
                  )}

                  {/* Popup */}
                  {isPopupOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="bg-white w-[40vw] h-[40vh] flex flex-col justify-center items-center p-8">
                        {/* Popup content */}
                        <p className="font-bold text-lg mb-4">Confirm your availability</p>
                        <div className="flex flex-col mb-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="yes"
                              checked={userChoice === 'yes'}
                              onChange={() => handleOptionChange('yes')}
                            />
                            <span className="ml-2">Yes, I am available to join immediately</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="no"
                              checked={userChoice === 'no'}
                              onChange={() => handleOptionChange('no')}
                            />
                            <span className="ml-2">No (Please specify your availability)</span>
                          </label>
                        </div>
                        {userChoice === 'no' && (
                          <textarea
                            className="w-full h-16 p-2 border border-gray-300 rounded mt-4"
                            placeholder="Specify your availability..."
                            value={availabilityText}
                            onChange={(e) => setAvailabilityText(e.target.value)}
                          />
                        )}
                        <div className='flex w-full justify-end'>
                          <div className='mx-auto'>
                            <button className="mt-4 rounded-lg bg-gray-600 text-white py-1 px-5" onClick={handlePopupClose}>
                              Cancel
                            </button>
                          </div>
                          <div className='mx-auto'>
                            <button className="mt-4 rounded-lg bg-[#ED9017] text-white py-1 px-5" onClick={handleApplyNow}>
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <button className='rounded-lg ml-12 bg-gray-600 text-white py-1 px-5'>Don't recommend</button> */}
                </div>
              </div>
            </div>

            {/* about job */}
            <div className='my-4 p-8'>
              <div className='font-semibold text-[20px]'>About the job</div>
              <div className='text-gray-600'>About the job
                Provide structural engineering services with an emphasis on repair and rehabilitation of constructed works, investigation and performance evaluation, and new design. The Sr. Structural Engineer will be expected to conduct structural design, investigation, and repair and rehabilitation projects; complete and review analysis and design calculations; execute and manage the preparation of drawings and specifications; assist with mentoring of junior staff; manage project budgets and schedules; interact with clients; and prepare technical reports of GCI work.
              </div>
            </div>

            {/* Job desc and responsibilities */}
            <div className='my-4 p-8'>
              <div className='font-semibold text-[20px]'>Job description and responsibilities:</div>
              <div className='text-gray-600'>
                <ul className='list-disc'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa cum ipsam provident vitae veritatis magnam dolorum voluptate laboriosam a.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam sapiente perspiciatis?</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas unde mollitia expedita consectetur ducimus minima!</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>

            {/* requirements */}
            <div className='my-4 p-8'>
              <div className='font-semibold text-[20px]'>Requirements:</div>
              <div className='text-gray-600'>
                <ul className='list-disc'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa cum ipsam provident vitae veritatis magnam dolorum voluptate laboriosam a.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam sapiente perspiciatis?</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas unde mollitia expedita consectetur ducimus minima!</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>

            <div className='my-4 p-8'>
              <div className='font-semibold text-[20px]'>Expected Salary</div>
              <div className='text-gray-600'>&#8377; xxx,xxx</div>
            </div>
          </div>
        </div>




        {/* competitor analysis */}
        <div className='p-8 my-16 bg-white'>
          <div className='font-bold text-[20px]'>Competitor's analysis</div>

          <div className='flex m-auto'>

            {/* left part */}
            <div className='w-2/5 mx-auto'>
              <div className='my-4'>
                <div className='font-semibold'>Applicant</div>
                <div className='flex py-3'>
                  <div className='border-violet-500 border-2 rounded-full px-3 py-4'>25%</div>
                  <div className='ml-3'>You are ahead of 75% people who have also viewed this job</div>
                </div>
              </div>

              <div className='my-4'>
                <div className='font-semibold'>Match based on your profile:</div>
                <div className='m-2'>
                  <div>Current role</div>
                  <RectangleDisplay no='4' />
                </div>
                <div className='m-2'>
                  <div>Past experience</div>
                  <RectangleDisplay no='3' />
                </div>

                <div className='m-2'>
                  <div>Skills</div>
                  <RectangleDisplay no='3' />
                </div>
              </div>

              <div className='my-4'>
                <div className='font-semibold'>Seniority level</div>
                <div className='m-2'>
                  <div>120 Entry Level applicants</div>
                  <LineDisplay no='120' />
                </div>

                <div className='m-2'>
                  <div>80 Senior level applicants</div>
                  <LineDisplay no='80' />
                </div>

                <div className='m-2'>
                  <div>40 Manager level applicants</div>
                  <LineDisplay no='40' />
                </div>
              </div>
            </div>

            {/* right part */}
            <div className='w-2/5 mx-auto'>


              <div>
                <div className='font-semibold my-4 text-gray-600'>Education</div>
                <div className='text-gray-600'><span className='text-violet-500 font-semibold'>66%</span> have a bachelor's degree</div>
                <div className='text-gray-600'><span className='text-violet-500 font-semibold'>20%</span> have a master's degree</div>
                <div className='text-gray-600'><span className='text-violet-500 font-semibold'>7%</span> have other degree</div>
              </div>

              <div className='my-8'>
                <div className='font-semibold'>Universities</div>
                <div className=' m-auto'>
                  <div className='flex m-auto'>
                    <div>icon</div>
                    <div className='ml-5 text-gray-600'>Facebook hired <span className='font-semibold text-black'>15</span> people from NIT</div>
                  </div>

                  <div className='flex m-auto'>
                    <div>icon</div>
                    <div className='ml-5 text-gray-600'>Facebook hired <span className='font-semibold text-black'>15</span> people from IIT</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='flex p-8 my-16 bg-white'>
          <div className='w-2/5 mx-auto'>
            <div className='font-bold text-[20px]'>Compatibility score</div>
            <div><CircularProgressBar percentage={82} /></div>
          </div>
          <div className='w-2/5 mx-auto'>
            <div className='font-bold text-[20px]'>Top Skills</div>
            <div>You have 6 out of 8 top skills</div>
            <Skill skillName='Python' have='true' />
            <Skill skillName='C++' have='true' />
            <Skill skillName='Figma' have='true' />
            <Skill skillName='Creative direction' have='true' />
            <Skill skillName='Strategy building' have='true' />
            <Skill skillName='Rapid prototyping' have='true' />
            <Skill skillName='Team management' have='true' />
            <Skill skillName='HTML' have='false' />
            <Skill skillName='Video editing' have='false' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default JobDetails 