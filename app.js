//To roll use- slotMachine.roll()
//to check the balance use- slotMachine.checkBalance()

const slotMachine = {

    currentBalance: 0,

    roll: function () {
        const numbersArr = [[], [], []];
        let row1Str = "";
        let row2Str = "";
        let row3Str = "";
        let wins = 0;

        this.currentBalance -= 1; //each time roll method run 1 $ will be reduce from the player. 

        for (let i = 0; i < 15; i++) {
            if (i < 5) {
                numbersArr[0].push(Math.floor(Math.random() * 5));
            }
            else if (i >= 5 && i < 10) {
                numbersArr[1].push(Math.floor(Math.random() * 5));
            }
            else {
                numbersArr[2].push(Math.floor(Math.random() * 5));
            }
        }
        //Printing first row
        for (i = 0; i < numbersArr[0].length; i++) {
            row1Str += `${numbersArr[0][i]} `;
        }
        console.log(row1Str);

        //printing second row
        for (i = 0; i < numbersArr[1].length; i++) {
            row2Str += `${numbersArr[1][i]} `;
        }
        console.log(row2Str);

        //Printing second row
        for (i = 0; i < numbersArr[2].length; i++) {
            row3Str += `${numbersArr[2][i]} `;
        }
        console.log(row3Str);

        /* Checking if there is a win on any row 
        and if there is a win, winning money of that row will added to currentBalance variable */
        for (let j = 0; j < numbersArr.length; j++) {

            if (numbersArr[j][0] === numbersArr[j][1] && numbersArr[j][0] === numbersArr[j][2]) {

                if (numbersArr[j][0] === numbersArr[j][3] && numbersArr[j][0] == numbersArr[j][4]) {
                    this.currentBalance = (5 * (numbersArr[j][0] + 0.6)) + this.currentBalance;
                } else if (numbersArr[j][0] === numbersArr[j][3]) {
                    this.currentBalance = (4 * (numbersArr[j][0] + 0.6)) + this.currentBalance;
                } else {
                    this.currentBalance = (3 * (numbersArr[j][0] + 0.6)) + this.currentBalance;
                }
                wins += 1;

            }

        }

        if (wins !== 0) {
            return 'You Won';
        } else {
            return 'You Lost';
        }
    },

    checkBalance: function () {
        if (Math.sign(this.currentBalance) === -1) {
            return `You have lost ${this.currentBalance * -1} Dollars`
        } else {
            return `You have won ${this.currentBalance} Dollars`
        }
    }

}