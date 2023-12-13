import StartingPoint from './StartingPoint';
import EndingPoint from './EndingPoint';
import AdditionalSteps from './AdditionalSteps';
import Roadmap from './Roadmap';
import { useState, useEffect } from 'react'
import Inputs from './Inputs';
//GENERATES UNIQUE IDs
import { v4 as uuidv4} from 'uuid';
import Edit from './Edit';
uuidv4();




function RoadMapWrapper() {
  const [ startingLocation, setStartingLocation] = useState([]);
  const [ destination, setDestination] = useState([]);
  const [ stepsInBetween, setStepsInBetween] = useState([]);


  /**
   * 
   * FOR STARTING POINT:
   * SETTING NEW TASK AS AN OBJECT
   * ADDING IT TO THE TASKS ARRAY
   */
  const handleAddStartPoint = (startHere) => {
    const newStart = {
      id: uuidv4(),
      type: 'start',
      start: startHere,
      completed: false,
      isEditing: false,
      coordinates: generateRandomCoordinates(),
    };
  
    setStartingLocation([...startingLocation, newStart]);
  }

  /**
   * 
   * FOR ENDING POINT:
   */
  const handleAddEndingPoint = (endHere) => {
    const newEnd = {
      id: uuidv4(),
      type: 'end',
      end: endHere,
      completed: false,
      isEditing: false,
      coordinates: generateRandomCoordinates(),
    };
  
    setDestination([...destination, newEnd]);
  }

   /**
   * 
   * FOR ADDITIONAL STEPS:
   */
  const handleAddAdditional = (inBetween) => {
    const newStep = {
      id: uuidv4(),
      type: 'between',
      middle: inBetween,
      completed: false,
      isEditing: false,
      coordinates: generateRandomCoordinates(),
    };
  
    setStepsInBetween([...stepsInBetween, newStep]);
  }

  const generateRandomCoordinates = () => {
    // Generate random coordinates for demonstration purposes
    const randomLat = Math.random() * 10; // Adjust the range based on your needs
    const randomLng = Math.random() * 10; // Adjust the range based on your needs
  
    return { lat: randomLat, lng: randomLng };
  };

  /**
   * 
   * DELETING A GOAL
   */
  const deleteGoal = (id) => {
    setStartingLocation(startingLocation.filter(element => element.id !== id));
    
  }

  /**
   * EDITING A GOAL
   */
  const editStartPoint = (id) => {
        setStartingLocation((prevLocation) =>
      prevLocation.map((element) =>
        element.id === id ? { ...element, isEditing: !element.isEditing } : element
      )
    );
  }

  /**
   * PASSING 'HANDLEADDTASK' TO FORM PAGE SO WHEN SUBMIT BTN IS CLICKED, IT WILL TAKE THE VALUE OF WHAT WAS TYPED AND USE THAT AS THE TASK VALUE 
   * MAPPING THROUGH TASKS OBJECT TO DISPLAY EA. ONE ON INDITASK
   */
  return (
    <div className='wrapper'>
      <div className='goal-inputs'>

    <Inputs 
    handleAddStartPoint={handleAddStartPoint} 
    handleAddEndingPoint={handleAddEndingPoint}
    handleAddAdditional={handleAddAdditional}
    />
    </div>
    <div className='scroll-box'>

    {
      startingLocation.map((element, index) => (
        element.isEditing ? 
        (<Edit />) :
        (<StartingPoint 
        object={element} 
        key={index}
        deleteGoal={deleteGoal}
        editStartPoint={() => editStartPoint(element.id)}
        />)
      ))
    }

    {
      stepsInBetween.map((element, index) => (
        <AdditionalSteps object={element} key={index} />
      ))
    }

    {
      destination.map((element, index) => (
        <EndingPoint object={element} key={index}/>
      ))
    }
    </div>
    <div className='roadmap'> 
    <Roadmap 
      startingLocation={startingLocation}
      stepsInBetween={stepsInBetween}
      destination={destination}/>
    </div>
    </div>
  )
}

export default RoadMapWrapper