import React from 'react'
import {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';


import  Left from '../Assests/Icons/lefta.png';
import  Right from '../Assests/Icons/righta.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={Left} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={Right} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=> (
            <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            >
              {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar