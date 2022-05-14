import React,{Component} from 'react'
import style from './form.module.css'


//////////////FORM VALIDATION USING REACT FUNCTIONAL COMPONANT/////////////


// export default function Form() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleName = (e) => {
//         setName(e.target.value);
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePass = (e) => {
//         setPass(e.target.value);
//     }
//     const handleSubmit = (e) => {
//         let loginInfo = {
//             name: name,
//             email: email,
//             pass: pass
//         }
//         console.log(loginInfo);
//         console.log('You are submited');

//         e.preventDefault();
//     }


//     return (
//         <div className = {style.container}>
//             <h1>SignUp now!</h1>
//             <form className = {style.form}  onSubmit = {handleSubmit} action = '' >
//                 <div>
//                     <label htmlFor = 'name'>Name: </label><br/>
//                     <input type = 'text' value = {name} name = 'name' id = 'name' onChange = {handleName} required></input>
//                 </div>
//                 <div>
//                     <label htmlFor = 'email'>Email: </label><br/>
//                     <input type = 'email' value = {email} name = 'email' id = 'email' onChange = {handleEmail}  required></input>
//                 </div>
//                 <div>
//                     <label htmlFor = 'pass'>Password: </label><br/>
//                     <input type='pass' value={pass} name='pass' id='pass' onChange = {handlePass}  required></input>
//                 </div>
//                 <button type = 'submit'>Register Now</button>
//             </form>
//         </div>
//     )
// }

//
//
//
////////////////////////FORM VALIDATION USING REACT CLASS COMPONENT////////////////
class index extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            value: ''

            
        };
    };


    handleName = (e) =>{
        this.setState({name: e.target.value})
    }
    handleEmail = (e) =>{
        this.setState({email: e.target.value})
    }
    handlePass = (e) =>{
        this.setState({value: e.target.value})
    }
    handleSubmit = (e) => { 
        let loginInfo = {
            name: this.state.name,
            email: this.state.email,
            pass: this.state.value
        }
        console.log(loginInfo)
        e.preventDefault();
        console.log('You have bin rgistered')

    }
    


render() {
    return (
       <div>
        <div className = {style.container}>
            <h1>SignUp now!</h1>
            <form className = {style.form}  onSubmit = {this.handleSubmit} action = '' >
                <div>
                    <label htmlFor = 'name'>Name: </label><br/>
                    <input type = 'text' name = 'name' id = 'name' onChange = {this.handleName} required></input>
                </div>
                <div>
                   <label htmlFor = 'email'>Email: </label><br/>
                    <input type = 'email' name = 'email' id = 'email' onChange = {this.handleEmail}  required></input>
                </div>
                <div>
                    <label htmlFor = 'pass'>Password: </label><br/>
                     <input type='pass' name='pass' id='pass' onChange = {this.handlePass}  required></input>
                 </div>
               <button type = 'submit'>Register Now</button>
             </form>
         </div>
        </div>
        )
    }
}

export default index


