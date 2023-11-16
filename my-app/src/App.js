import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {


  const matrix = [['', '', ''],['', '', ''], ['', '', '']]
const [matrixData, setMatrixData] = useState(matrix)
const [count, setCount] = useState(0)

const [value, setvalue] = useState('o')


const updateMatrix = (i,j) => {

  if(matrixData[i][j]) {
    return
  }

  if(checkForGameOver()) {
    alert("game over")
    setMatrixData(matrix)
    setCount(0)
  }
  let newmatrix = []
  for(let i =0; i< 3; i++) {
    newmatrix[i] = [...matrixData[i]]
  }
  console.log(newmatrix, 'newmatri')
  let update1 = [...newmatrix[i]]

  let value1 = ''
  if(value === 'o' ) {
    value1 = 'x'
    update1[j] = 'x'
  } else {
    value1 = 'o'
    update1[j] = 'o'
  }

  newmatrix[i] = update1

let newCount = count + 1
setvalue(value1)
setCount(newCount)
console.log(newmatrix, 'newmatrix')
setMatrixData(newmatrix)
if(checkForGameOver(newmatrix)) {
  alert(`${checkForGameOver(newmatrix)} Won`)
  setMatrixData(matrix)
  setCount(0)
}

}

const checkForGameOver = (matrix = matrixData) => {

for(let i= 0; i< matrix.length; i++) {
    if((matrix[i][0] === 'x' && matrix[i][1] === 'x' && matrix[i][2] === 'x') || (matrix[i][0] === 'o' && matrix[i][1] === 'o' && matrix[i][2] === 'o')) {
      console.log('game over')
      return matrix[i][0]
    }
}
for(let j=0; j< 3; j++) {
  if((matrix[0][j] === 'x' && matrix[1][j] === 'x' && matrix[2][j] === 'x') || (matrix[0][j] === 'o' && matrix[1][j] === 'o' && matrix[2][j] === 'o')) {
    console.log('game over')
    return matrix[0][j]
  }
}
if((matrix[0][0] === 'x' && matrix[1][1] === 'x' && matrix[2][2] === 'x') || (matrix[0][0] === 'o' && matrix[1][1] === 'o' && matrix[2][2] === 'o') ) {
console.log('game over')
return matrix[0][0]
}

if((matrix[0][2] === 'x' && matrix[1][1] === 'x' && matrix[2][0] === 'x') || (matrix[0][2] === 'o' && matrix[1][1] === 'o' && matrix[2][0] === 'o') ) {
  console.log('game over')
  return matrix[0][2]
  }

}

const restartGame = () => {

  setMatrixData(matrix)
  setCount(0)
}

  return (
    <div className="App">
     
     <div classname="container">
      <div className="row">
        <button className="cell" onClick={() => updateMatrix(0,0)}>{matrixData[0][0]}</button>
        <button className="cell" onClick={() => updateMatrix(0,1)}>{matrixData[0][1]}</button>
        <button className="cell" onClick={() => updateMatrix(0,2)}>{matrixData[0][2]}</button>
      </div>
      <div className="row">
        <button className="cell" onClick={() => updateMatrix(1,0)}>{matrixData[1][0]}</button>
        <button className="cell" onClick={() => updateMatrix(1,1)}>{matrixData[1][1]}</button>
        <button className="cell" onClick={() => updateMatrix(1,2)}>{matrixData[1][2]}</button>
      </div>
      <div className="row">
        <button className="cell" onClick={() => updateMatrix(2,0)}>{matrixData[2][0]}</button>
        <button className="cell" onClick={() => updateMatrix(2,1)}>{matrixData[2][1]}</button>
        <button className="cell" onClick={() => updateMatrix(2,2)}>{matrixData[2][2]}</button>
      </div>
    </div>
      { count >= 9 && (
        <div classname="restartButton">
          <button onClick={() => restartGame()}>{"Restart Game"}</button>
        </div>
      )}
    </div>
  );
}

export default App;
