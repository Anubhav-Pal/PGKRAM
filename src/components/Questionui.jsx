import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

const Questionui = () => {
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState(null);

  // Declare recorder as a state variable
  const [recorder, setRecorder] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;

    // Create a new recorder instance and set it in the state
    const newRecorder = new RecordRTC(stream, { type: 'video' });
    setRecorder(newRecorder);

    // Start recording
    newRecorder.startRecording();
    setRecording(true);
  };

  const stopRecording = () => {
    // Stop recording and update the state with the recorded blob
    recorder.stopRecording(() => {
      const blob = recorder.getBlob();
      setRecordedVideoBlob(blob);

      // Preview the recorded video
      videoRef.current.src = URL.createObjectURL(blob);

      // Reset the recorder state
      setRecorder(null);

      // Update the recording state
      setRecording(false);
    });
  };

  return (
    <div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni reiciendis autem, iste dolor error laborum aut provident voluptate delectus?
      </div>

      {/* Video display */}
      <video ref={videoRef} width="400" height="300" controls autoPlay muted></video>

      {/* Record button */}
      {!recording && (
        <button onClick={startRecording}>Start Recording</button>
      )}

      {/* Stop recording button */}
      {recording && (
        <button onClick={stopRecording}>Stop Recording</button>
      )}

      {/* Display preview after stopping recording */}
      {recordedVideoBlob && (
        <div>
          <h3>Preview</h3>
          <video width="400" height="300" controls src={URL.createObjectURL(recordedVideoBlob)}></video>
        </div>
      )}
    </div>
  );
};

export default Questionui;
