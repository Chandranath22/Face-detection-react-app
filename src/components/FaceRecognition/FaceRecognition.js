import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const faceBox = () => {
    let newBox = [];
    if(box.length > 0){
      for(let i =0; i < box.length; i++){
        newBox.push(
          <div className='bounding-box' style={{top: box[i].topRow, right:  box[i].rightCol, bottom:  box[i].bottomRow, left:  box[i].leftCol}} key={i}></div>
        )
      }
    }
    return newBox;
  }
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          faceBox()
        }
        
      </div>
    </div>
  );
}

export default FaceRecognition;