import React from 'react'
import {data} from '../data.js'

export class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state={data};
    }
    render() {
    return data.map(x=> { return <div className='item'><h3>{x.id} - </h3>
        <h3>{x.first_name}  </h3>
        <h3>{x.last_name} old </h3>
        <h3>{x.age} , </h3>
        <h3>{x.gender},  race - </h3>
        <h3>{x.race} stats: </h3>
        <div class="meter">
         <span style={{width: x.traits.stamina/2 + '%'}}>stamina- {x.traits.stamina} , </span>
         <span style={{width: x.traits.strength/2 + '%'}}>strength-{x.traits.strength} , </span>
         <span style={{width: x.traits.dexterity/2 + '%'}}>dexterity-{x.traits.dexterity}  </span>
        </div>
        <img src={x.img}></img>

        </div>}
    )
}}