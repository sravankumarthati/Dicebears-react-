import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const url="http://localhost:3000/details";
export class HttpList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             persons:[]
        }
    }
    componentDidMount(){
       axios.get(url).then((res)=>{return this.setState({persons:res.data}),console.log(res.data)});
    }
    
    render() {
        return (
            <div>
               
                {this.state.persons.map(data=>(
                    <div className="container" id="firstdiv">
                    <div className="card">
                    <div className="row w-75">
                        <div className="col-sm-6">
                          <img src={data.imgurl} alt="personImage"/>
                        </div>
                        <div className="col-sm-6" id="tablediv">
                        
                            <table> 
                            <h2>{data.name}</h2> 
                             <tr>
                                 <td id="ntd">Age :</td>
                                 <td id="atd">{data.age}</td>
                             </tr>
                             <tr>
                                 <td id="ntd">Organisation :</td>
                                 <td id="atd">{data.work}</td>
                             </tr>
                              <tr>
                                <td id="ntd">Position :</td>
                                <td id="atd">{data.position}</td>
                              </tr>
                           </table>
                        </div>
                    </div>

                </div>
                </div> 
            
                ))}  <br/>
            </div>
        )
    }
}

export default HttpList
