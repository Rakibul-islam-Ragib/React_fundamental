import React, {Component} from 'react';

// class Welcome extends Component {
//     constructor(){
//         super()

//         this.state = {
//             name: 'Rakibul Islam',
//             age: '21',
//             Favourit: 'Singing'

//         }
//     }

//     render(){
//         return <h1>{this.state.name} You are Welcome, Your age is {this.state.age}, and Fourite hobbies is {this.state.Favourit}</h1>
//     }
// }

// class Lifecycle extends Component {
//     constructor(){
//         super() 

//         this.state = {
//             Counter : 0,


//         }
//         this.increment = ()=> this.setState({Counter: this.state.Counter+1})
//         this.decrement = ()=> this.setState({Counter: this.state.Counter-1})
//     }


//         render(){
//             console.log('render')
//             return <div>
//                 <div className = 'Counter'>
//                     Counter: {this.state.Counter}
//                 </div>
//                 <button onClick = {this.increment}>increment</button>
//                 <button onClick = {this.decrement}>decrement</button>
//             </div>
//         }     
        

// }


// export default Lifecycle ;


import ReactDOM from 'react-dom';

class Test extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
        this.state = { name : "Rakibul Islam "};
	}

	componentWillMount()
	{
		console.log("componentWillMount()");
	}

	componentDidMount()
	{
		console.log("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Geek!" });
	}

	render()
	{
		return (
			<div>
			<h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
            <h1>My name is {this.state.name}</h1>
			<h2>
			<a onClick={this.changeState.bind(this)}>Press Here!</a>
			</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}

    componentWillUnmount(){
        console.log('Exit here')
    }
}

ReactDOM.render(
	<Test/>,
document.getElementById('root'));

export default Test 