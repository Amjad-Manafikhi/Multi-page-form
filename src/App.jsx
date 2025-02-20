import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from './Steps.jsx'
import Info from './Info.jsx'
import Plan from './Plan.jsx'
import Add from './Add-ons.jsx'
import Finish from './Finishing.jsx'
import Waves from './Waves.jsx'

function App() {
  const [checkedPlan, setCheckedPlan] = React.useState("Arcade");
  const [toggleButton, setToggleButton] = React.useState(false);
  const [checkedValue, setCheckedValue] = React.useState(1);
  const [ons,setOns]=React.useState([
          {
              type:"Online service",
              discription:"Access to multiplayer games",
              price:1,
              checked:true
          } ,
          {
              type:"Larger storage",
              discription:"Extra 1TB of cloud save",
              price:2,
              checked:true
          } ,
          {
              type:"Customizable Profile",
              discription:"Custom theme on your profile",
              price:2,
              checked:false
          } ,
          
  
      ])
  const [steps, setSteps] = React.useState([
    {
      value: "Your Info",
      id: 1
    },
    {
      value: "Select Plan",
      id: 2
    },
    {
      value: "ADD-ONS",
      id: 3
    },
    {
      value: "SUMMARY",
      id: 4
    }

  ]);
  const plans=[
          {
              type:"Arcade",
              price:9,
              checked: "Arcade"===checkedPlan ? true :false
          } ,
          {
              type:"Advanced",
              price:12,
              checked: "Advanced"===checkedPlan ? true :false
  
          },
          {
              type:"Pro",
              price:15,
              checked: "Pro"===checkedPlan ? true :false
  
          }
  
      ]
  function handleStepClick(id) {
    setCheckedValue(id);
  }

  const stepsElements = steps.map((elem) =>
    <Steps
      value={elem.value}
      id={elem.id}
      checked={checkedValue === elem.id}
      key={elem.id}
      onClick={handleStepClick}

    />
  )
  function handleChangePlan(){
    setCheckedValue(2);
  }


  return (
    <div className="container">
      <div className='stepContainer'>
        {stepsElements}
      </div>
      <div className='main'>
        {checkedValue === 1 && <Info />}
        {checkedValue === 2 && <Plan
          checkedPlan={checkedPlan}
          setCheckedPlan={setCheckedPlan}
          toggleButton={toggleButton}
          setToggleButton={setToggleButton}
          plans={plans}
        />}
        {checkedValue === 3 && <Add ons={ons} setOns={setOns} toggleButton={toggleButton} />}
        {checkedValue === 4 && <Finish ons={ons} plans={plans} toggleButton={toggleButton} handleChangePlan={handleChangePlan}/>}
      </div>
    </div>
  )
}

export default App
