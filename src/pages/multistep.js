import {useState } from "react"
import './multistep.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useMultistepForm } from "../hooks/useMultistepForm"

import Section1 from "../components/multistep/section1"
import Section2 from "../components/multistep/section2"
import Section3 from "../components/multistep/section3"
import Section4 from "../components/multistep/section4"
import Section5 from "../components/multistep/section5"
import Section6 from "../components/multistep/section6"
import Section7 from "../components/multistep/section7"
import Section8 from "../components/multistep/section8"
import Section9 from "../components/multistep/section9"
import Section10 from "../components/multistep/section10"
import Section11 from "../components/multistep/section11"



const INITIAL_DATA= {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function Multistep() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Section1 {...data} updateFields={updateFields} />,
      <Section2 {...data} updateFields={updateFields} />,
      <Section3 {...data} updateFields={updateFields} />,
      <Section4 {...data} updateFields={updateFields} />,
      <Section5 {...data} updateFields={updateFields} />,
      <Section6 {...data} updateFields={updateFields} />,
      <Section7 {...data} updateFields={updateFields} />,
      <Section8 {...data} updateFields={updateFields} />,
      <Section9 {...data} updateFields={updateFields} />,
      <Section10 {...data} updateFields={updateFields} />,
      <Section11 {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div className="multi">
      <form onSubmit={onSubmit}>
        <div className="multi-indicator">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="multi-buttons">
          {!isFirstStep && (
            <button type="button" onClick={back}>
           <FontAwesomeIcon icon="fa-solid fa-arrow-left"  style={{color: "#000000", marginRight:'5px'}} />
              Previous
            </button>
          )}
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#000000", marginLeft:'5px'}} />
            </button>
        </div>
      </form>
    </div>
  )
}

export default Multistep