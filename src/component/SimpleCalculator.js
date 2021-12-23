import React,{Component} from 'react';
import Base from "./Base";

class SimpleCalculator extends Component{
    constructor(){
        super()
        this.state={
            inputOne : '',
            inputTwo : '',
            result:''
        }
    }

    handleInputOne=e=>{
        this.setState({inputOne:e.target.value})
    };

    handleInputTwo=e=>{
        this.setState({inputTwo:e.target.value})
    }
    
    addition=()=>{
        let sum = parseInt(this.state.inputOne)+parseInt(this.state.inputTwo);
        this.setState({result:sum})
    }

    subtraction=()=>{
        let sum = this.state.inputOne-this.state.inputTwo;
        this.setState({result:sum}) 
    }

    multiplication=()=>{
        let mul = this.state.inputOne*this.state.inputTwo;
        this.setState({result:mul})
    }

    division = ()=>{
        let div = this.state.inputOne/this.state.inputTwo;
        this.setState({result:div})
    }
    
    AreaofTriangle = ()=>{
        let triangle = 1/2*this.state.inputOne*this.state.inputTwo;
        this.setState({result:triangle})
    }

    AreaofCylinder=()=>{
        let cylinder = 2*Math.PI*this.state.inputOne*this.state.inputTwo;
        this.setState({result:cylinder})
    }

    AreaofTSACylinder=()=>{
        let TsaCylinder = 2*Math.PI*this.state.inputOne*parseInt(this.state.inputOne)+parseInt(this.state.inputTwo);
        this.setState({result:TsaCylinder})
    }

    CSAofCone=()=>{
        let csaofcone = Math.PI*this.state.inputOne*this.state.inputTwo;
        this.setState({result:csaofcone})
    }

    VolumeofCylinder=()=>{
        let volOfCyl = Math.Pi*this.state.inputOne*this.state.inputOne*this.state.inputTwo;
        this.setState({result:volOfCyl})
    }

    VolofCone=()=>{
        let volofcone = 1/3*Math.PI*this.state.inputOne*this.state.inputOne*this.state.inputTwo;
        this.setState({result:volofcone})
    }


    refreshPage=()=> {
        window.location.reload();
      }
      backButton=()=>{
        window.history.back()
    }

    render(){
        return(
            <Base
            title="Interesting innit!?"
            description="Calculate Few more!"
            className="container p-4"
          >
            <div>
                <input type="text" onChange={this.handleInputOne} value={this.state.inputOne} placeholder='enter first value'></input>
                <input type="text"  onChange={this.handleInputTwo} value={this.state.inputTwo} placeholder='enter second value'></input>
                <div className="text-secondary">
                    <h3>Answer:{this.state.result}</h3>
                </div>
                <div>
                <button className="btn btn-outline-success" onClick={()=>this.addition()}>➕</button>
                <button className="btn btn-outline-success" onClick={()=>this.subtraction()}>➖</button>
                <button className="btn btn-outline-success" onClick={()=>this.multiplication()}>❌</button>
                <button className="btn btn-outline-success" onClick={()=>this.division()}>➗</button>
                <div>
                <button className="btn btn-outline-success" onClick={()=>this.AreaofCylinder()}>CSA of cylinder</button>
                <button className="btn btn-outline-success" onClick={()=>this.AreaofTSACylinder()}>TSA of cylinder</button>
                <button className="btn btn-outline-success" onClick={()=>this.VolumeofCylinder()}>Vol of cylinder</button>
                </div>
                <div>
                <button className="btn btn-outline-success" onClick={()=>this.AreaofTriangle()}>area of triangle</button>
                <button className="btn btn-outline-success" onClick={()=>this.CSAofCone()}>CSA of cone</button>
                <button className="btn btn-outline-success" onClick={()=>this.VolofCone()}>Vol of cone</button>
                </div>
                </div>
                <div>
                <button  className="btn btn-outline-danger" onClick={this.backButton}>🔙</button>      
               <button className="btn btn-outline-primary" onClick={this.refreshPage}>✔️</button>
                </div>
            </div>
            </Base>
        )
    }
}

export default SimpleCalculator;