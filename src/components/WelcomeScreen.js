import React,{useState} from 'react';

const WelcomeScreen = () => {

    const [welcomeMessage ,setWelcomeMessage]=useState('Welcome to the Application! ');
   
    const handleInputChange  =(e) =>{
        setWelcomeMessage(e.target.value);


    };

  return (
    <div style ={{textAlign:"center",marginBottom: '20px'}}>
    
        <h1>{welcomeMessage}</h1>
        <input
         type="text"
         placeholder='Customize welcome message'
         value={welcomeMessage}
         onChange={handleInputChange}
         style={{padding: '10px',width:'80%'}}

         />

    </div>
    
  );
};

export default WelcomeScreen;