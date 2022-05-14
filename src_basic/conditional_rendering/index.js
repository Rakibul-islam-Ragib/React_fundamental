import React, { Component } from 'react' ;
import Homepage from './home';
import LoginPage from './login';


class conditional_rendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin : false,
        }
    }
    

    render() {
        const {isLoggedin} = this.state;

    //---Conditional rendering------------
        // if (isLoggedin === true) {
        //     return <Homepage />
        // }else{
        //     return <LoginPage />
        // }

    //Ternary operator --------------------
        // let element;
        // element = isLoggedin ? <Homepage /> : <LoginPage /> ;
        // return element ;

    // Inside JSX
        // return(
        //     <div>
        //         {isLoggedin ? <Homepage /> : <LoginPage />};
        //     </div>
        // )

    //Sort Cercuit method.....
        return(
            <div>
                {isLoggedin && <Homepage />}
            </div>
            //when isLoggedin is false it gives output is null.
            //because its not are going to ahed. its null.
        )
    }


}

export default conditional_rendering ;