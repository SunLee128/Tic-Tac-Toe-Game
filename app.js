var boxes = document.querySelectorAll('.box')
var marks = document.querySelectorAll('.inner')
var markO = 'O'
var markX = 'X'
var msg = document.querySelector('.msg')
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
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var clickCounter = 0

// handleClick - making a move
var handleClick = function (event) {
  // if box is empty
  if (event.target.textContent === '') {
    // when counter is even number
    if (clickCounter % 2 === 0) {
      event.target.textContent = markX
      event.target.classList.add('X')
      event.target.classList.remove('O')
      event.target.classList.add('fade-out')
      // mark the board item at index of target id
      board[Number(event.target.id[1])] = markX
      msg.textContent = "O's turn now"
      clickCounter++
    }
    // when counter is odd number
    else {
      event.target.textContent = markO
      event.target.classList.add('O')
      event.target.classList.remove('X')
      event.target.classList.add('fade-out')
      // mark the board item at index of target id
      board[Number(event.target.id[1])] = markO
      msg.textContent = "X's turn now"
      clickCounter++
    }
  } else {
    msg.textContent = 'Try different box!'
    msg.classList.add('shake-horizontal')
    setTimeout(unShake, 500)
  }
  checkWins()
}

// check wins against var Wins
var checkWins = function () {
  for (var i = 0; i < wins.length; i++) {
    if (board[wins[i][0]] == 'X' && board[wins[i][1]] == 'X' && board[wins[i][2]] == 'X') {
      msg.textContent = 'X has won! 🏆'
      msg.classList.add('shake-horizontal')
      winCase = wins[i]
      stopGame()
      highlightWinner()
    } else if (board[wins[i][0]] == 'O' && board[wins[i][1]] == 'O' && board[wins[i][2]] == 'O') {
      msg.textContent = 'O has won! 🎉'
      msg.classList.add('shake-horizontal')
      winCase = wins[i]
      stopGame()
      highlightWinner()
    } else if (clickCounter === 9) {
      msg.textContent = 'It is a draw!🤝'
      msg.classList.add('shake-horizontal')
      showMarks()
    }
  }
}

// remove .shake-horizontal from message
var unShake = function () {
  msg.classList.remove('shake-horizontal')
}

// Stop Game when there is a winner
var stopGame = function () {
  for (i = 0; i < board.length; i++) {
    if (typeof board[i] === 'number') {
      marks[board[i]].textContent = '  '
      showMarks()
    }
  }
}

var highlightWinner = function () {
  document.querySelector('#s' + winCase[0]).classList.add('shake-horizontal')
  document.querySelector('#s' + winCase[1]).classList.add('shake-horizontal')
  document.querySelector('#s' + winCase[2]).classList.add('shake-horizontal')
}

var showMarks = function () {
  marks.forEach(function (mark) {
    mark.classList.remove('fade-out')
  })
}

var showBoxesTemp = function () {
  marks.forEach(function (mark) {
    mark.classList.remove('fade-out')
  })
  // setup a function to run in 5 seconds
  setTimeout(hideMarks, 200)
}

var hideMarks = function () {
  marks.forEach(function (mark) {
    mark.classList.add('fade-out')
  })
}
// replay button to reset the board
var handleReplay = function (event) {
  for (var i = 0; i < marks.length; i++) {
    marks[i].textContent = ''
    board[i] = i
    msg.textContent = 'Start!'
    marks[i].classList.remove('shake-horizontal')
    showMarks()
    unShake()
    clickCounter = 0
  }
}
// Add event Listener to replay button
document.querySelector('.replay').addEventListener('click', handleReplay)
document.querySelector('.show').addEventListener('click', showBoxesTemp)
// Assign eventListener to boxes
boxes.forEach(function (box) {
  box.addEventListener('click', handleClick)
})
