<template>
  <div class="container">

    <header class="header">
      <!-- <button @click="resetBoard" class="button is-info is-light">RESET</button> -->
    </header>
    <section class="notice">
      <!-- игра идет -->
          <article v-if="gameIsOn" class="message is-dark">
            <div class="message-body">
              <p >Ходит <strong>{{currentStep}}</strong></p>
            </div>
          </article>
          
          <!-- победил О -->
          <article v-if="winner === 'O' " class="message is-info ">
            <div class="message-body">
              <p>Поздравляю, <strong>{{winner}}!</strong></p>
            </div>
          </article>

          <!-- победил Х -->
          <article v-if="winner === 'X' " class="message is-warning">
            <div class="message-body">
              
              <p>Поздравляю, <strong>{{winner}}!</strong></p>
            </div>
          </article>

          <!-- Ничья -->
          <article v-if="winner === '' && !gameIsOn" class="message is-primary">
            <div class="message-body">
              <p ><strong>Ничья</strong></p>
            </div>
          </article>
    </section>

    <section class="main">
          <board-comp 
            :currentStep='currentStep'
            :board='board'
            :gameIsOn='gameIsOn'
            @change-step='changeNextStep'>

          </board-comp>
    </section>

    <section class="option">
        <div @click="optionOpen = !optionOpen" class="option__wrapper" :class="{wrActive: optionOpen}">
          <div class="option__divider"></div>
          <div  class="option__title">
            Options
          </div>
        </div>
          <ul v-if="optionOpenTimer">
            <li @click="resetBoard" :class="{liOneActive: optionOpenTimer}"><i title="Reset" class="bi bi-arrow-clockwise"></i> </li>
            <li :class="{liTwoActive: optionOpenTimer}"><i class="bi bi-capsule-pill"></i></li>
            <li :class="{liThreeActive: optionOpenTimer}"><i class="bi bi-chat-quote-fill"></i></li>
            <li :class="{liFourActive: optionOpenTimer}"><i class="bi bi-cup-hot-fill"></i></li>
          </ul>
    </section>




  </div>
</template>

<script>
import BoardComp from '@/components/BoardComp.vue'


export default {
  name: 'App',
  components: {
    BoardComp,

  },
  data(){
    return{
      currentStep: 'X',
      board: [0,0,0,0,0,0,0,0,0],
      gameIsOn: true,
      winner: '',

      optionOpen: false,
      optionOpenTimer: false,
    }
  },
  methods:{
    changeNextStep(board, index ){
      (this.currentStep === 'X') ?  this.board[index] = 'X'  : this.board[index] = 'O';
      (this.currentStep === 'X') ? this.currentStep = 'O'  : this.currentStep = 'X';
      // this.board[index] = this.currentStep

      this.searchWinner(this.board[index])

      if(!board.includes(0)){
        this.gameIsOn = false
      }
      
    },
    resetBoard(){
      // for(let i = 0; i < this.board.length; i++){
      //   this.currentStep = 'X'
      //   this.board[i] = 0
      // }
        this.board = []
        this.currentStep = 'X'
        this.winner = ''
        this.gameIsOn = true
        let timerId = setInterval(() => this.board.push(0), 50);
        
        // остановить вывод через 450 ms
        setTimeout(() => { 
          clearInterval(timerId) 
        }, 450);
    },
    optionShow(){
      if(this.optionOpen){
        setTimeout(() =>{
          this.optionOpenTimer = true
        }, 0)
      }
      else this.optionOpenTimer = false
    },
    searchWinner(currentStep){
        for(let i = 0; i < this.board.length; i++){
          ///gorizont
          if(this.board[0] == currentStep && this.board[1] == currentStep && this.board[2] == currentStep){
            
            this.winner = currentStep
            this.gameIsOn = false
          }

          if(this.board[3] == currentStep && this.board[4] == currentStep && this.board[5] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }

          if(this.board[6] == currentStep && this.board[7] == currentStep && this.board[8] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
          ///diagonal
          if(this.board[0] == currentStep && this.board[4] == currentStep && this.board[8] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
          if(this.board[2] == currentStep && this.board[4] == currentStep && this.board[6] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
          ///vertical
          if(this.board[0] == currentStep && this.board[3] == currentStep && this.board[6] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
          if(this.board[1] == currentStep && this.board[4] == currentStep && this.board[7] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
          if(this.board[2] == currentStep && this.board[5] == currentStep && this.board[8] == currentStep){
            
            this.winner = currentStep

            this.gameIsOn = false
          }
        }
    }
  },
  watch:{
    optionOpen(){
      this.optionShow()
    },
    board:{
          handler(){
              this.optionOpen = false
          },
          deep: true
        },

  }
}
</script>

<style lang="scss">
html {

  background-color: #0e0d0e !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%2398969b' fill-opacity='0.06'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E");
}
.message{
  width: 500px;
  margin: 0 15px;
  p{
    font-weight: 500;
  }
}
.header{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  button{
    font-weight: 700;
  }
}
.notice{
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.option{
  position: relative;
  padding: 25px 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  &__title{
    font-weight: 700;
    text-align: left;
    padding-left: 6px;
    position: absolute;
    top: 30px;
    
  }
  ul{
    position: relative;
    z-index: 0;
    li{
      color: aliceblue;
      width: 30px;
      height: 30px;
      font-size: 30px;
      cursor: pointer;
      i{
        // box-shadow: 3px 3px 13px #000, -3px -3px 13px #000;
      }
      // background-color: darkgray;
      &:nth-child(1){
        position: absolute;
        left: -160px;
        transform: rotateZ(-30deg);
        animation: showLI1 0.5s   1 ease;
        // opacity: 0;
      }
      &:nth-child(2){
        position: absolute;
        right: -64px;
        top: 20px;
        transform: rotateZ(25deg);
        animation: showLI2 0.5s  1 ease-in;
      }
      &:nth-child(3){
        position: absolute;
        left: -130px;
        top: 110px;
        transform: rotateZ(-15deg);
        animation: showLI3 0.5s   1 cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      &:nth-child(4){
        position: absolute;
        right: -54px;
        top: 130px;
        transform: rotateZ(20deg);
        animation: showLI4 0.5s  1 cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      
    }
  }
  &__wrapper{
    width: 70px;
    height: 70px;
    background-color: #222022;
    transition: 0.5s all;
    border-radius: 3px;
    cursor: pointer;
    
  }
  &__divider{
    height: 4px;
    border-radius: 3px 3px 0 0;
    background-color: hsl(348deg 100% 61%);
  }
}


.titleActivre{
  animation: wrShaking 0.2s   2 ease;
}
.wrActive{
  width: 90px;
  height: 90px;
  background-color: #3b363b;
  box-shadow: 3px 3px 13px #000, -3px -3px 13px #000;
  border-top: 31px solid hsl(0, 0%, 96%);
  // animation: wrShaking 0.2s   2 ease;
  z-index: 10;
}


.liOneActive{
  left: -60px;
  transform: rotateZ(-30deg);
  opacity: 1;
}
.liTWoActive{
  left: -60px;
  transform: rotateZ(-30deg);
  opacity: 1;
}
.liThreeActive{
  left: -60px;
  transform: rotateZ(-30deg);
  opacity: 1;
}
.liFourActive{
  // left: -60px;
  transform: rotateZ(-30deg);
  opacity: 1;
}
@keyframes wrShaking{
  0%{
    transform: rotateZ(0deg);
  }
  50%{
    transform: rotateZ(8deg);
  }
  60%{
    transform: rotateZ(0deg);
  }
  75%{
    transform: rotateZ(-8deg);
  }
  100%{
    transform: rotateZ(0deg);
  }
}

@keyframes showLI1{
  0%{
    left: -40px;
    transform: rotateZ(0deg);
  }
  25%{
    font-size: 15px;

  }
  50%{
    font-size: 30px;

  }
  75%{
    font-size: 25px;
  }
  100%{
    left: -160px;
    transform: rotateZ(-30deg);
    opacity: 1;
    
  }
}

@keyframes showLI2{
  0%{
    right: 0;
    transform: rotateZ(0deg);
  }
  25%{
    font-size: 15px;

  }
  50%{
    font-size: 30px;

  }
  75%{
    font-size: 25px;
  }
  100%{
    right: -64px;
    top: 20px;
    transform: rotateZ(25deg);
    
  }
}
@keyframes showLI3{
  0%{
    left: -30px;
    top: 0;
    transform: rotateZ(0deg);
  }
  25%{
    font-size: 15px;

  }
  50%{
    font-size: 30px;

  }
  75%{
    font-size: 25px;
  }
  100%{
    left: -130px;
    top: 110px;
    transform: rotateZ(-15deg);
    opacity: 1;
  }
}
@keyframes showLI4{
  0%{
    right: 20px;
    top: 0;
    transform: rotateZ(0deg);
  }
  25%{
    font-size: 15px;

  }
  50%{
    font-size: 30px;

  }
  75%{
    font-size: 25px;
  }
  100%{
    // right: -54px;
    // top: 130px;
    // transform: rotateZ(20deg);
    opacity: 1;
  }
}
</style>
