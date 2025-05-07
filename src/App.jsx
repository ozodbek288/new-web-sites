import React from 'react'

let data = new Date();

let randomly = Math.floor(Math.random() * 100)

let namee = prompt("Ismingizmi kiriting")

console.log(data);

let month = data.getMonth() + 1
let day = day.getDay()
let year = year.getFullYear()

console.log(data);




const App = () => {
  

  return (
    <div className='biggi'>
      <div className="box">
        <h1 className="about">
          Hello my name is: <span>{namee}</span>
        </h1>

        <h2 className="time">
          This is the day: <span>{day}.{month}.{year}</span>
        </h2>

        <h2 className="random">A random number from 0 to 100:</h2>

        <div className="number">{randomly}</div>
      </div>
    </div>
  );
}

export default App



// console.log(data);

// random.textContent = data.getDate()

// console.log(random);






