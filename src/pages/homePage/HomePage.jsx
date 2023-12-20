import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from './HeroSection';
import Services from './Services';
import Notifications from './Notifications';
import axios from 'axios';
import  {useDropzone}  from 'react-dropzone';
const HomePage = () => {
  const [data,setData]=useState(null);
  const [success,setSuccess]=useState(null);
  const [formData, setFormData] = useState({
    name: 'Viraaj',
    email: 'viraajpathariya@gmail.com',
  });
  const [isMobile, setIsMobile] = useState(false);
  //The below function is used to send data from react to flask
  const sendDataToFlask = async () => {
    try {
      const response = await axios.post('https://pgrkam-backend.onrender.com/submit-data', formData);

      console.log('Response from Flask:', response.data);
    } catch (error) {
      console.error('Error sending data to Flask:', error);
    }
  };
  //The below function is used to update any value :
  const [documentId, setDocumentId] = useState('-NlrFpvKRdKXCD1ZtqWn'); // ID of the document to update / delete 
  const [updatedData, setUpdatedData] = useState({
    name: 'VaaniP',
    email: 'vaanipathariya@gmail.com',
  });

  const updateDataInMongoDB = async () => {
    try {
  
      const response = await axios.put(`https://pgrkam-backend.onrender.com/update-data/${documentId}`, updatedData);

      console.log('Response from Flask:', response.data);
    } catch (error) {
      console.error('Error updating data in Flask:', error);
    }
  };
  //The below function is used to delete data in mongodb 
  const deleteDataFromMongoDB = async () => {
    try {
      const response = await axios.delete(`https://pgrkam-backend.onrender.com/delete-data/${documentId}`);

      console.log('Response from Flask:', response.data);
    } catch (error) {
      console.error('Error deleting data in Flask:', error);
    }
  };
  //To update age by one 
  const updateDataInMongoDBAge = async () => {
    try {
  
      const response = await axios.put(`https://pgrkam-backend.onrender.com/increment-count/${documentId}`, updatedData);

      console.log('Response from Flask:', response.data);
    } catch (error) {
      console.error('Error updating data in Flask:', error);
    }
  };
  //The below function is used to post and update the pdf document , video and image : 
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop});
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await axios.post('https://pgrkam-backend.onrender.com/upload-pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('File uploaded successfully',response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  // The below function is used to fetch data from mongodb and store that data in the "data variable"
  useEffect(() => {
    const fetchSuccessData = async () => {
      try {
        const response = await axios.get('https://pgrkam-backend.onrender.com/get-success');
        setSuccess(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSuccessData();
  }, []);
  console.log(success)
  return (
    <div>
      <Navbar />
       <HeroSection/>
       {/* <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop a PDF file here, or click to select one</p>
      </div>
      <button onClick={uploadFile}>Upload</button>
    </div> */}
       {/* <button onClick={updateDataInMongoDBAge}>test</button> */}
       {/* <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={uploadVideo}>Upload Video</button> */}
       {/* <input type="file" accept="image/*" onChange={ImageChange} />
       <button onClick={updateImage}>Update Image</button> */}
 {/* This is just a testing button , remove it when necessary */}
<div className='flex '>
    <div className='w-3/5 m-auto '>
        <Services/>
    </div>
    <div className='w-1/5 m-auto'>
        <Notifications/>
    </div>
</div>
    </div>
  )
}

export default HomePage