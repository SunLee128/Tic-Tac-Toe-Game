var boxes = document.querySelectorAll(".box");
// var player1Box = document.querySelectorAll(".player1");
// var player2Box = document.querySelectorAll(".player2");
var markO = 'O'
var markX = 'X'
var markOId = []
var markXId = []
var wins = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
var winsString = ["012","345","678","036","147","258","048","246"]
var board = [0,1,2,3,4,5,6,7,8]
var clickCounter = 0

//handleClick
var handleClick = function(event){
    if(event.target.textContent ===""){
        if(clickCounter%2 === 0){
            event.target.textContent = markX;
            event.target.classList.add('X')
            markXId.push(event.target.id)
            markXId.sort();
            clickCounter++;
            // if (markXId.length=3){
            //     // checkWinsX();
            // }
        } else {
            event.target.textContent = markO;
            event.target.classList.add('O')
            markOId.push(event.target.id);
            markOId.sort();
            clickCounter++;
            // if (markOId.length=3){
            //     // checkWinsY();
            // }
        }      
    }
}

// var checkWinsX = function(){
//     var xString = markXId.join()
//     while(i<winsString.length){
//         if (winsString[i]===xfirst3){
//             console.log('Winner is X')
//             break;
//         }
//     }
// }



//compare players boxId with winning combination
// var checkWins = function(wins, array){
//     var first3Items = array.slice(0,3)
//     for(var i=0;i<wins.length; i++){
//         var countMatch = 0;
//         for(var j=0; j<wins[i].length; j++){
//            for(var k=0; k=first3Items.length; k++){
//                if(wins[i][j]===first3Items[k]){
//                    countMatch++;
//                    if(countMach === 3){
//                        break;
//                     }
//                 } 
//             }
//         }
//     } 
//     alert("winner")
// }


//Assign eventListener to boxes
boxes.forEach(function(box){
    box.addEventListener('click',handleClick);
})

//replay button----------------------------------------------
//replay button to reset the board
var handleReplay = function(event){
    for(var i=0; i<boxes.length; i++){
        boxes[i].textContent = ""
    }
}

//Assing eventListener to replay button
document.querySelector(".replay").addEventListener('click',handleReplay)
//------------------------------------------------------------ 

