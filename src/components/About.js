import Profile from "./profile_class_component";
import React from 'react';

// const About = () => {
// return(
//     <div>
//         <h1> About us page...  </h1>
//         <Profile  name={'Sachin'} />
//     </div>
// )
// }

class About extends React.Component {

    constructor(props){
        super(props);
     
        console.log('about')
    }


    render(){
      return(
    <div>
        <h1> About us page...  </h1>
        <Profile   />
    </div>
)
    }
}

export default About;