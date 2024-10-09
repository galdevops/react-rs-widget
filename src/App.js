import ImageUploader from "./components/ImageUploader";
import "./App.css";

const App = () => {
  return (
    <div className="slideshow">
      <div>
      <h1>Image Uploader</h1>

      <ImageUploader />

      <h5 className="generate-key">* Embed this widget with a script tag. Click here.</h5>
      
    </div>

    </div>
    
  );
};

export default App;
