import React ,{Component} from 'react';
import './App.css';
import Student from './components/Student';

class  App extends Component {
  render(){
  return (
    <div>
    <h1 className="Leader">Leadersboard</h1>
     <Student name="Azhar" university="FAST" score={349} /> 
     <Student name="Amir" university="University of Karachi" score={348} /> 
     <Student name="Danella" university="DHA Suffa" score={347}/> 
     <Student name="Mahnoor" university="DHA Suffa" score={346}/> 
     <Student name="Ebrahim" university="Sindh Madresstul Islam University" score={344}/> 
     <Student name="Dua" university="University of Karachi" score={345}/> 
     <Student name="Shahroz" university="Sindh Madresstul islam university" score={343}/> 
</div> 
  );
  }
}

export default App;
