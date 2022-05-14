import React from 'react';

// import Clock from './components/clock';
// import Test from './components/lifecycle';
// import Conditional_Rendering from './conditional_rendering/index'
// import EventHandling from './event_handling/index';
// import BindEvent from './event_handling/bindevent';
// import Hooks_UseState from './Hooks/index2';
// import Form from './Form/index';

// import Event from './event_handling/sumit/clock';

// import Form from './sForm/form'

// import Tempcalculator from './StateManagement/calculator'
import ClickCounter from './Render_props/clickCounter';
import HoverCounter from './Render_props/Hovercounter';
import Counter from './Render_props/counter';


function App() {
  return (
      <div>
        <Counter children={(counter, incrementCount)=>(
          <ClickCounter count = {counter} incrementCount = {incrementCount}/>
        )}/>
         <Counter children={(counter, incrementCount)=>(
          <HoverCounter count = {counter} incrementCount = {incrementCount}/>
        )}/>
      </div>
  )
}

export default App;