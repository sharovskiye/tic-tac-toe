class TicTacToe {
    constructor() {

    }
    player='x'

    matrix=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, columnIndex) {
        // console.log(this.matrix[rowIndex][columnIndex]);
        if(!this.matrix[rowIndex][columnIndex]){
        this.matrix[rowIndex][columnIndex]=this.player
        this.player=this.player=='x'?'o':'x'}
        // if(this.player==='x'){
        //     this.player='o'
        // }else { this.player='x'}
        // console.log(this.player);
    }

    isFinished() {
        
    }

    getWinner() {

    }

    noMoreTurns() {
        for (const elem of this.matrix) {
            for (const item of elem) {
                if (item===null) {
                    return false
                    
                }   
            }
        }
       
        return true
    }

    isDraw() {

    }

    getFieldValue(rowIndex, columnIndex) {
        return this.matrix[rowIndex][columnIndex]
    }
}
//  game= new TicTacToe()
// console.log(game.getCurrentPlayerSymbol());
// game.nextTurn(1,1)
// console.log(game.getCurrentPlayerSymbol());


module.exports = TicTacToe;
