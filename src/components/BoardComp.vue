<template>
    <div class="board">
        <ul class="board__list">
            <!-- <li class="board__item">1</li>
            <li class="board__item">2</li>
            <li class="board__item">3</li>
            <li class="board__item">4</li>
            <li class="board__item">5</li>
            <li class="board__item">6</li>
            <li class="board__item">7</li>
            <li class="board__item">8</li>
            <li class="board__item">9</li> -->
            
            <li class="board__item "  :class="{activeX: item == 'X', activeO: item == 'O'}"
                v-for="(item, index) in board" :key="item"
                @click="tapOnBox(index)" >
                <div  v-if="item !== 0" >
                    <span v-if="item === 'O' "><i class="bi bi-circle"></i></span>
                    <span v-if="item === 'X' "><i class="bi bi-x-circle"></i></span>
                    
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"board-comp",
    props:{
        currentStep:{
            type: String
        },
        board:{
            type: Array
        },
        gameIsOn:{
            type: Boolean
        }
    },
    data() {
        return{
            // board: [0,0,0,0,0,0,0,0,0]
        }
    },
    methods:{
        tapOnBox(index){
            if(!this.gameIsOn){
                return false
            }
            if( this.board[index] == 0){
                // this.board[index] = this.currentStep
                this.$emit('change-step', this.board, index )
                // console.log(typeof this.board[index])
            }

        }
    }
}
</script>


<style lang="scss">
.board{
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    &__list{
        display: flex;
        flex-wrap: wrap;
        width: 310px;
        height: 310px;
        gap: 5px;
    }
    &__item{
        width: 100px;
        height: 100px;
        background-color: hsl(0, 0%, 90%);
        border-radius: 3px;
        cursor: pointer;
        transition: 0.3s all;
        &:hover{
            // background-color: hsl(0, 4%, 85%);
            background-color: hsl(0, 0%, 71%);

        }
        span{
            i{
                font-size: 40px;
                animation: show 0.3s 1 ease ;
            }
        }
    }
}
@keyframes show{
    0%{
        font-size: 0px;
    }
    100%{
        font-size: 40px;
    }
}

.activeX{
    background-color: hsl(48deg 100% 74%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;
    &:hover{
        // background-color: hsl(0, 4%, 85%);
        background-color: hsl(48deg 100% 74%);
    }
}
.activeO{
    background-color: hsl(204, 86%, 53%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;
    &:hover{
        // background-color: hsl(0, 4%, 85%);
        background-color: hsl(204, 86%, 53%);

    }
}
</style>