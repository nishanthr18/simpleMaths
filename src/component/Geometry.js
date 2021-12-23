import React,{Component} from 'react';
import Base from './Base';
import { Link } from "react-router-dom";


class Geometry extends Component{
    constructor(){
        super()
        this.state={
            input:'',
            result:''
        }
    }
    onChangeInput=event=>{
        this.setState({input:event.target.value})
    }

    squareRoot=()=>{
        let ans = Math.sqrt(this.state.input);
        this.setState({result:ans})
    }
    cubeRoot=()=>{
        let cbrtAns = Math.cbrt(this.state.input)
        this.setState({result:cbrtAns})
    }
    circumference=()=>{
        let circum = 2*Math.PI*this.state.input;
        this.setState({result:circum})
    }
    area=()=>{
        let area = Math.PI*this.state.input*this.state.input;
        this.setState({result:area})
    }
    volOfSphere=()=>{
        let volofSphere = 4/3*Math.PI*this.state.input;
        this.setState({result:volofSphere})
    }
    areaOfSphere = ()=>{
        let areaofsphere = 4*Math.PI*this.state.input*this.state.input;
        this.setState({result:areaofsphere})
    }
    refreshPage=()=> {
        window.location.reload();
      }
      backButton=()=>{
        window.history.back()
    }
    
 


    render(){
        return(
            <div>
<Base
  title="Interesting innit!?"
  description="Calculate Few more!"
  className="container p-4"
>
               <input type='text' className="form-control" onChange={this.onChangeInput} value={this.state.input} placeholder='enter the value '></input>
               <div className="text-secondary">
                   <h5>Answer:   {
                 this.state.result
               }</h5>
               </div>
               <button className="btn btn-outline-success"onClick={()=>{this.squareRoot()}}>sqrt</button>
               <button className="btn btn-outline-success"onClick={()=>{this.cubeRoot()}}>cbrt</button>
               <button className="btn btn-outline-success"onClick={()=>{this.circumference()}}>circum. circle</button>
               <button className="btn btn-outline-success"onClick={()=>{this.area()}}>A of circle</button>
               <button className="btn btn-outline-success"onClick={()=>{this.volOfSphere()}}>Vol.Sphere</button>
               <button className="btn btn-outline-success"onClick={()=>{this.areaOfSphere()}}>A of Sphere</button>
               <div>
               <button  className="btn btn-outline-danger" onClick={this.backButton}>🔙</button>      
               <button className="btn btn-outline-primary" onClick={this.refreshPage}>✔️</button>
               <Link to='/simplecalculator'>
               <button className="btn btn-outline-dark">NEXT▶</button>
               </Link>
               </div>
               </Base>
            </div>
        )
    }
}

export default Geometry;