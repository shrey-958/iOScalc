import React , {Component} from 'react';
import './App.css'


class App extends Component {

  constructor(){
    super()
  this.state={
    count:'0'
  }
  this.reset = this.reset.bind(this)
  this.addDecimal = this.addDecimal.bind(this)
  this.calculate = this.calculate.bind(this)
  this.addToCount = this.addToCount.bind(this)
  this.signInverse = this.signInverse.bind(this)
  this.toPercentage = this.toPercentage.bind(this)
  
}


  reset(){
    this.setState({
      count:'0'
    })
  }

  
signInverse(){
  const {count}=this.state
  this.setState({
    count : String(Number(count)*(-1))
  })
}
addDecimal(){
  const {count}=this.state
  if(count.indexOf('.')===-1)
  {
    this.setState({
      count:count+'.'
    })
  }
}
toPercentage(){
  const {count}=this.state
  this.setState({
    count : String(Number(count)/(100))
  })
}
  calculate(){
    const {count}=this.state
    this.setState({
      count:eval(count)
    })
  }

  addToCount(opt){
    const {count}=this.state
this.setState({
  count:count==='0' ?  String(opt)  :  count + opt
})
  }

render(){
    return (
    <div className='container' style={{marginTop : "2vw"}}>
    
    <div className='row resultbox' style={{marginTop : "3vw",fontSize : 70}}> 
      <input value={this.state.count}/>
    </div>
<div className='row'>
<button className ="extras" onClick={()=> this.reset()}><b>C</b></button>
<button className ="extras"  onClick={()=> this.signInverse()}><b>+/-</b></button>
<button className ="extras"  onClick={()=> this.toPercentage()}><b> % </b></button>
<button className ="operators" onClick={()=> this.addToCount('/')}><b>/</b></button>
  
</div>
<div className='row'>
  <button className ="numbers"  onClick={()=> this.addToCount(7)}><b> 7 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(8)}><b> 8 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(9)}><b> 9 </b></button>
  <button className ="operators"  onClick={()=> this.addToCount('*')}><b> x </b></button>
</div>
<div className='row'>
  <button className ="numbers"  onClick={()=> this.addToCount(4)}><b> 4 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(5)}><b> 5 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(6)}><b> 6 </b></button>
  <button className ="operators"  onClick={()=> this.addToCount('-')}><b> - </b></button>
</div>
<div className='row'>
<button className ="numbers"  onClick={()=> this.addToCount(1)}><b> 1 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(2)}><b> 2 </b></button>
  <button className ="numbers"  onClick={()=> this.addToCount(3)}><b> 3 </b></button>
  <button className ="operators"  onClick={()=> this.addToCount('+')}><b> + </b></button>
</div>

<div className='row' style={{marginBottom : "2vw"}}>
  <button style={{flex : 2.4, borderRadius : 50, textAlign: "left"}} className ="numbers bigB" onClick={()=> this.addToCount(0)}><b> 0 </b></button>
  
  <button  className ="numbers" onClick={()=> this.addDecimal()}><b> . </b></button>
  <button className="calculate operators" onClick={()=>this.calculate()}><b> = </b></button>
</div>


    </div>
  )
}
}

export default App;