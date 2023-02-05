import Profile from "./profile_class_component";
import React from 'react';

class About extends React.Component {

    constructor(props){
        super(props);
        console.log('about')
    }


    render(){
      return(
    <div className="p-12 content-center">
        <h1 className='font-bold text-3xl'> About us</h1>
        <Profile />
    </div>
)
    }
}

export default About;