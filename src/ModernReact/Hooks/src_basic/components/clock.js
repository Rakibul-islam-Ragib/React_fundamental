import React from "react";
import ReactDom from "react-dom";

//  const element = React.createElement('h1', null, 'Hello, world');


// const index = 0;

// setInterval(() => {
// const element = (
//     <h1 className='heading' tabIndex={index}>
//         <span className = 'text'>
//             Time is. <br/>
//             {new Date().toLocaleTimeString()}
//         </span>
//         <img src = ""></img>
//     </h1>
// );

// ReactDom.render(element, document.getElementById('root'));
// }, 100);

//---------------React Components and props....

// function Clock({ locale }){
//     return (
//         <h1 className='heading'>
//             <span className = 'text'>
//                 Time is. <br/>
//                 {new Date().toLocaleTimeString(locale)}
//             </span>
//                 <img src = ""></img>
//         </h1>
//     );
// }

// // ReactDom.render(Clock(), document.getElementById('root'));
// ReactDom.render(< Clock locale="bn-BD"/>, document.getElementById('root'));

//------------------------/////React Class Componant........



// class Time extends React.Component {
//     render(){
//         return(
//             <h1>
//                 time is - {this.props.children} - {new Date().toLocaleTimeString(this.props.locale)};
//             </h1>
//         );
//     };
// };

// ReactDom.render(<Time locale="bn-BD">Test</Time>, document.getElementById('root'));

// function Welcome(props) {  return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;

// ReactDom.render(element, document.getElementById('root'));


// const index = 0;

// setInterval(() => {
// const element = (
//     <h1 className='heading' tabIndex={index}>
//         <span className = 'text'>
//             Time is. <br/>
//             {new Date().toLocaleTimeString()}
//         </span>
//         <img src = ""></img>
//     </h1>
// );


// ReactDom.render(element, document.getElementById('root'));
// }, 100);

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
       this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer )
    };

    tick(){
        this.setState({
            date: new Date(),
        })
    }

        render(){
            return (
                <h1 className='heading'>
                    <span className = 'text'>
                        Time is - {this.props.children} <br/>
                        {new Date().toLocaleTimeString(this.props.locale)}
                    </span>
                        <img src = ""></img>
                </h1>
            );
        };
};

// ReactDom.render(<Clock> Test </Clock>, document.getElementById('root'));

export default Clock;