<template>
  <div>
    <div>
      <h2 v-if="!winner">Player {{ currentPlayer }} turn</h2>
      <h2 v-else>Game over</h2>
    </div>

    <div class="container text-center">
      <table id="board">
        <tr v-for="(row, rowIndex) in board" :key="index">
            <td
             v-for="(col, colIndex) in row"
             :key="index" 
             @click="makeMove(rowIndex, colIndex)">
              {{ col === 'X' ? 'X' : col === 'O' ? 'O' : ''  }}
            </td>
        </tr>
    </table>
    </div>

    <div>
      <div v-if="winner">
        <h2>Player {{ winner }} win</h2>
      </div>
      <button class="btn btn-primary mt-3" @click="resetGame">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let currentPlayer = ref('X')

const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

function checkWin(board) {
  let winSquares = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  for (let i = 0; i < winSquares.length; i++) {
    let [ a, b, c ] = winSquares[i]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
}

const winner = computed(() => checkWin(board.value.flat()))

function makeMove(row, col) {
  // check if there is a winner
  if (winner.value) return
  // check if col has been used
  if(board.value[row][col]) return

  board.value[row][col] = currentPlayer.value
  currentPlayer.value == 'X' ? currentPlayer.value = 'O' : currentPlayer.value = 'X'
}

function resetGame(){
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  currentPlayer.value = 'X'
}

</script>

<style scoped>
  table {
      border-collapse: collapse;
      margin: auto;
  }

  td {
      width: 50px;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      border: 1px solid black;
      font-size: 24px;
      cursor: pointer;
  }

  td:hover {
      background-color: #f0f0f0;
  }
</style>