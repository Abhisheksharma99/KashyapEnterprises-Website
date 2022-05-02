import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Type = () => {
  return (
    <div className='text-center typeheading fw-bolder mb-5'>
      <h1 className='fs-3'>Explore The Beautiful Chemistry</h1>

      <br />

      <ReactTypingEffect
        text={["Chemistry Is Fun", "Chemists have all the Solutions", "Science is always the solution","With Chemistry, We Can"]}
        speed={5}
        eraseSpeed={5}
        eraseDelay={1500}
        typingDelay={1500}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: '17215c', fontSize:"40px", fontWeight:"bold"} }
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </div>
  );
};
export default Type;