var boxes = document.querySelectorAll(".box");
var markO = 'O'
var markX = 'X'
var msg = document.querySelector(".msg")
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
var winCaseX = []
var winCaseY = []
var winsString = ["012","345","678","036","147","258","048","246"]
var board = [0,1,2,3,4,5,6,7,8]
var clickCounter = 0

//handleClick - making a move
var handleClick = function(event){
    // if box is empty
    if(event.target.textContent ===""){
        // when counter is even number
        if(clickCounter%2 === 0){
            event.target.textContent = markX;
            event.target.classList.add('X')
            board[Number(event.target.id[1])] = markX;
            msg.textContent = "O's turn now"
            clickCounter++;
        } 
            //when counter is odd number
            else {
            event.target.textContent = markO;
            event.target.classList.add('O')
            board[Number(event.target.id[1])] = markO;
            clickCounter++;
            msg.textContent = "X's turn now"
        }      
    }
    checkWins();
}
//check wins against var Wins
var checkWins = function(){
    for(var i = 0; i < wins.length; i++) {
        if (board[wins[i][0]] == 'X' && board[wins[i][1]] == 'X' && board[wins[i][2]] == 'X') {
            msg.textContent = "X has won!" 
            winInd1 = board.indexOf(board[wins[i][0]]);
            winInd2 = board.indexOf(board[wins[i][1]]);
            winind3 = board.indexOf(board[wins[i][2]]);
            winCaseX.push(wins[i])
            highlightWinner();
            return winCaseX
        } else if (board[wins[i][0]] == 'O' && board[wins[i][1]] == 'O' && board[wins[i][2]] == 'O'){
            msg.textContent = "O has won!"
            highlightWinner();
        } else if (clickCounter === 9){
            msg.textContent = "It is a draw!"
        }
    }
}

var highlightWinner = function(){
    //highlight winning boxes and stop the game
}

//Assign eventListener to boxes
boxes.forEach(function(box){
    box.addEventListener('click',handleClick);
})

//replay button to reset the board
var handleReplay = function(event){
    for(var i=0; i<boxes.length; i++){
        boxes[i].textContent = ""
        board[i] = i
        msg.textContent = "Start!"
    }
}

document.querySelector(".replay").addEventListener('click',handleReplay)