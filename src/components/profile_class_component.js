import React from 'react';
import UserContext from '../utils/userContext';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name: '',
                location: ''
            }
        }
    }


   async componentDidMount() {
    var data = await fetch('https://api.github.com/users/knowsach');
    var json = await data.json();
    console.log(' componentDidMount', json);
    this.setState({
        userInfo : json
    })
   }

    componentDidUpdate(prevProps, prevState){
    console.log('component did update');
    }

    componentWillUnmount(){
        console.log('component will unmount');
    }

    render() {
        console.log('render')
        return(
            <div>
                <UserContext.Consumer>
                    {({user})=> (
                        <h1> {user.name} {user.email} </h1>
                    )}
                </UserContext.Consumer>
                <h2> {this.state.userInfo.name} </h2>
                <img src = {this.state.userInfo.avatar_url} />
                <h2> {this.state.userInfo.location} </h2>
            </div>
        )
    }
}

export default Profile;