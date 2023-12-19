// Questionui.jsx

import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

const Questionui = ({ question }) => {
  const videoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState(null);
  const [recorder, setRecorder] = useState(null);

  const toggleRecording = async () => {
    if (!recording) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;

      const newRecorder = new RecordRTC(stream, { type: 'video' });
      setRecorder(newRecorder);

      newRecorder.startRecording();
    } else {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        setRecordedVideoBlob(blob);

        previewVideoRef.current.src = URL.createObjectURL(blob);
      });
    }

    // Toggle recording state
    setRecording(!recording);
  };

  // Reset recorded video blob when the question changes
  React.useEffect(() => {
    setRecordedVideoBlob(null);
  }, [question]);

  return (
    <div>
      <div>{question}</div>

      {/* Live recording on the left */}
      <div className="flex mt-4">
        <div>
          <video ref={videoRef} width="400" height="300" controls autoPlay muted></video>
          {/* Record button */}
          <button className={`bg-[#ED9017] py-2 px-4 rounded-lg text-white mt-2`} onClick={toggleRecording}>
            {recording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>

        {/* Preview on the right */}
        {recordedVideoBlob && (
          <div className="mt-[-40px] ml-auto flex justify-end ">
            <video ref={previewVideoRef} width="400" height="300" controls src={URL.createObjectURL(recordedVideoBlob)}></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionui;
