"use strict";

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        let interestAmount = this._balance * (this._interest / 100);
        this.deposit(interestAmount);
        return interestAmount;
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    endOfMonth() {
        const addedInterest = this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + addedInterest;
    }
}