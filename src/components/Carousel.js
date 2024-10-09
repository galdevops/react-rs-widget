import React from "react";

const quotes = [
    {
    q: "May it be a light to you in dark places, when all other lights go out.",
    a: "J.Tolkien"
    }, 
    {
    q: "Many that live deserve death. And some that die deserve life.",
    a: "Brene Tolkien"
    }, 
    {
    q: "A wizard is never late, nor is he early, he arrives precisely when he means to.",
    a: "Allen Tolkien"
    }, 
    {
    q: "May 3 be a light to you in dark places, when all other lights go out.",
    a: "J.Tolkien"
    }, 
    {
    q: "Many 4 live deserve death. And some that die deserve life.",
    a: "Brene Tolkien"
    }, 
    {
    q: "A wizard is 5 late, nor is he early, he arrives precisely when he means to.",
    a: "Allen Tolkien"
    },];

const delay = 2500;

const Carousel = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {quotes.map((item, index) => (
            
            <div
              className="slide"
              key={index}
            >
                <div id="quote-box" key={index}>
                <div id="text"><p>{item.q}</p></div>
                <div id="author"><p>{item.a}</p></div>
            </div>
            </div>
            
          ))}
        </div>
  
        <div className="slideshowDots">
          {quotes.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Carousel;
