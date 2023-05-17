import React, {useState} from "react"; 
import Icon from "./Components/Icon";


let tikArray = new Array(9).fill("")

const App = () => {
   let [isCross, setIsCross] = useState(true)
   let [winMessage, setWinMessage] = useState("")

   // PlayAgain
   const playAgain = () => {
       tikArray.fill("")
       setIsCross(true)
       setWinMessage("")
   }

   // FindWinner

   const findWinner = () => {
    // row 1
      if(tikArray[0] == tikArray[1] && tikArray[0]==tikArray[2] && tikArray[0] != ""){
          setWinMessage(tikArray[0]," has won")
      }
      // row 2: 
        else if(tikArray[3] == tikArray[4] && tikArray[3]==tikArray[5] && tikArray[3] != ""){
            setWinMessage(tikArray[3]," has won")
        }
        // row 3:
        else if(tikArray[6] == tikArray[7] && tikArray[6]==tikArray[8] && tikArray[6] != ""){
            setWinMessage(tikArray[6]," has won")
        }
        // column 1: 
        else if(tikArray[0] == tikArray[3] && tikArray[0]==tikArray[6] && tikArray[0] != ""){
            setWinMessage(tikArray[0]," has won")
        }
        // column 2:
        else if(tikArray[1] == tikArray[4] && tikArray[1]==tikArray[7] && tikArray[1] != ""){
            setWinMessage(tikArray[1]," has won")
        }
        // column 3:
        else if(tikArray[2] == tikArray[5] && tikArray[2]==tikArray[8] && tikArray[2] != ""){
            setWinMessage(tikArray[2]," has won")
        }
        // diagonal 1:
        else if(tikArray[0] == tikArray[4] && tikArray[0]==tikArray[8] && tikArray[0] != ""){
            setWinMessage(tikArray[0]," has won")
        }
        // diagonal 2:
        else if(tikArray[2] == tikArray[4] && tikArray[2]==tikArray[6] && tikArray[2] != ""){
            setWinMessage(tikArray[2]," has won")
        }
        
   }

    return(
        <div>
            <Icon />
        </div>
    )
} 

export default App;