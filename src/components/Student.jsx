import React ,{Component} from 'react';
import './App.css';

class Student extends Component {

    constructor() {
        super();
        this.state = {
           score: 0 ,
           success:false
        }
    }

    componentDidMount(){
        this.setState({
            score: this.props.score
        });
    }

    addScore() {
        this.setState({
            score: this.state.score + 1
        },
        () => {
            if(this.state.score >=350){
                this.setState({success:true})
            }
        }
    )

       
    }
    render(){

        const ifsuccess = this.state.success;
        let text;
        if(ifsuccess){
           text=<button className="success">Success</button>
        }
        else{
            text=<button className="fail">Failed</button>
        }
    return (
        <div className = "student">
           <div className="left">
              <h2 className="studentName">{this.props.name} {text}</h2>
              <p className="universityName">{this.props.university}
              <button onClick={ () => this.addScore()}>+</button></p>    
           </div>
           <div className="right">
                   <div className="score">{this.state.score}</div>
               </div>
        </div>
    );
    }
}

export default Student;