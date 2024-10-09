import React, { useState } from 'react';
import Carousel from "./Carousel";
import "../App.css";
const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('initial');

  const handleFileChange = (e) => {
    if (e.target.files) {
        setStatus('initial');
        setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log('file! ',file)
    if (file) {
        setStatus('uploading');
  
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          const result = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData,
          });
  
          const data = await result.json();
  
          console.log('handleUpload: ', data);
          setTimeout(() => {
            console.log("Delayed for 4 seconds.");
            setStatus('success');
          }, 4000)
        } catch (error) {
          console.error(error);
          setStatus('fail');
        }
      }
  };

  return (
    <>
        
        <section>
            {
                (!file && status === 'initial') &&
                <div className="input-group">
                    <input id="file" type="file" onChange={handleFileChange} />
                </div>
            }
                
            {(file && status === 'initial') && (
                <div>
                    <p>Image details for proccessing:</p>
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                
                    <button
                    onClick={handleUpload}
                    className="submit"
                    >Upload & process Image</button>
                </div>
            )}

            {
            status === 'uploading' ?
            <div>
                <p>Image proccessing in progress...</p>
                <Carousel />
            </div> :
            <div>

            <ImgOutput status={status}/>
            <Carousel />
            </div>
            }

        </section>
        
    </>
  );
};

const ImgOutput = ({ status }) => {
    if (status === 'success') {
      return <p>✅ File uploaded successfully!</p>;
    } else if (status === 'fail') {
      return <p>❌ File upload failed!</p>;
    } else if (status === 'uploading') {
      return <p>⏳ Uploading selected file...</p>;
    } else {
      return null;
    }
  };

export default ImageUploader;