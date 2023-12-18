import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Jobs from './Jobs';
import AppliedJobs from './AppliedJobs';
import Notifications from './Notifications';
import Messages from './Messages';
import Scholarships from './Scholarships';
import jobs from '../../assets/job.svg'
import applied from '../../assets/appliedJobs.svg'
import noti from '../../assets/noti.svg'
import msg from '../../assets/message.svg'
import sch from '../../assets/scholarship.svg'
import profile from '../../assets/profile.svg'
import ProfileOptions from './ProfileOptions';

const User = (props) => {

    const [showJobs, setShowJobs] = useState(true);
    const [showAppliedJobs, setShowAppliedJobs] = useState(false);
    const [showNoti, setShowNoti] = useState(false);
    const [showMsgs, setShowMsgs] = useState(false);
    const [showSch, setShowSch] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const handleJobsClick = () => {
        setShowJobs(true);
        setShowAppliedJobs(false);
        setShowNoti(false);
        setShowMsgs(false);
        setShowSch(false);
        setShowProfile(false);
      };
      const handleAppliedJobsClick = () => {
        setShowJobs(false);
        setShowAppliedJobs(true);
        setShowNoti(false);
        setShowMsgs(false);
        setShowSch(false);
        setShowProfile(false);
      };
      const handleNotiClick = () => {
        if(showNoti)
        {setShowNoti(false)}
        else
        setShowNoti(true);
      };
      const handleMessagesClick = () => {
        setShowJobs(false);
        setShowAppliedJobs(false);
        setShowNoti(false);
        setShowMsgs(true);
        setShowSch(false);
        setShowProfile(false);
      };
      const handleSchClick = () => {
        setShowJobs(false);
        setShowAppliedJobs(false);
        setShowNoti(false);
        setShowMsgs(false);
        setShowSch(true);
        setShowProfile(false);
      };
      const handleProfileClick = () => {
        setShowJobs(false);
        setShowAppliedJobs(false);
        setShowNoti(false);
        setShowMsgs(false);
        setShowSch(false);
        setShowProfile(true);
      };

  return (
    <div>
        <Navbar/>
        <div className='flex justify-end text-[15px] text-gray-700 items-center shadow-lg py-1 pr-12 '>
            <button className='mx-3 text-center' onClick={handleJobsClick}>
              <div className='flex justify-center'><img src={jobs} alt="jobs" /></div><div>Jobs</div>
            </button>
            <button className='mx-3 text-center' onClick={handleAppliedJobsClick}>
            <div className='flex justify-center'><img src={applied} alt="appliedjobs" /></div><div>Applied Jobs</div></button>
            <button className='mx-3 text-center' onClick={handleNotiClick}>
            <div className='flex justify-center'><img src={noti} alt="noti" /></div><div>Notifications</div>
            </button>
            <button className='mx-3 text-center' onClick={handleMessagesClick}>
            <div className='flex justify-center'><img src={msg} alt="msg" /></div><div>Messages</div>
            </button>
            <button className='mx-3 text-center' onClick={handleSchClick}>
            <div className='flex justify-center'><img src={sch} alt="sch" /></div><div>Scholarships</div>
            </button>
            <button className='mx-3 text-center' onClick={handleProfileClick}>
            <div className='flex justify-center'><img src={profile} alt="profile" /></div><div>Profile</div>
            </button>
        </div>

        {showJobs && <Jobs/>}
        {showAppliedJobs && <AppliedJobs/>}
        {showNoti && <Notifications/>}
        {showMsgs && <Messages/>}
        {showSch && <Scholarships/>}
        {showProfile && <ProfileOptions/>}
    </div>
    
  )
}

export default User