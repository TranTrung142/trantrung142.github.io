"use strict";

class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    setOverdraftLimit(value) {
        this._overdraftLimit = value;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this.getBalance() - amount + this.getOverdraftLimit() < 0) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this.getBalance() + ": overdraft limit " + this.getOverdraftLimit();
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this.getBalance() + " overdraft limit: " + this.getOverdraftLimit();
        }
        return "";
    }
}