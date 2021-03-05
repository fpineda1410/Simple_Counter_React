import React, { useState, useEffect  } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
    const [unit0, setUnit0] = useState(0);
    const [unit1, setUnit1] = useState(0);
    const [unit2, setUnit2] = useState(0);
    const [unit3, setUnit3] = useState(0);
    const [unit4, setUnit4] = useState(0);
    const [unit5, setUnit5] = useState(0);
    
    const properties = {
      card_class:"card bg-secondary",
      clock_size: "5rem"

    };
   
  // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
      
      var i=0;

      
      setInterval(updater, 1000);
      
    function updater () {
      setCounter(i+=1);
      var i_str = i.toString();
      console.log(unit5);

      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      let i_str_reversed = reverseString(i_str);
      setUnit0(i_str_reversed.charAt(0));
      setUnit1(i_str_reversed.charAt(1));
      setUnit2(i_str_reversed.charAt(2));
      setUnit3(i_str_reversed.charAt(3));
      setUnit4(i_str_reversed.charAt(4));
      setUnit5(i_str_reversed.charAt(5));
    }

    },[]);
  

  return (
    <div className="App">
      <div className=" mt-5 ms-5 me-5">
        <div class="row align-items-center">

            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body">
                <span className="material-icons" style={{fontSize:"5rem",color:"white"}}>schedule</span>
                </div>
              </div>
            </div>

            <div class="col ">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit5}
                </div>
              </div>
            </div>

            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit4}
                </div>
              </div>
            </div>
          
            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit3}
                </div>
              </div>
            </div>

            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit2}
                </div>
              </div>
            </div>

            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit1}
                </div>
              </div>
            </div>

            <div class="col">
              <div class={properties.card_class}>
                <div class="card-body" style={{fontSize:"5rem",color:"white"}}>
                {unit0}
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );

}

  export default Counter;