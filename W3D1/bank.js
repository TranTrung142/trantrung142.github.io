"use strict";

class Bank {
    static nextNumber = 1;
    constructor() {
        this._accounts = [];
    }

    getAccounts() {
        return this._accounts;
    }

    getAccount(number) {
        return this._accounts.find(account => account.getNumber() === number);
    }

    addAccount() {
        const account = new Account(Bank.nextNumber++);
        this._accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const account = new SavingsAccount(Bank.nextNumber++, interest);
        this._accounts.push(account);
        return account.getNumber();
    }

    addCheckingAccount(overdraft) {
        const account = new CheckingAccount(Bank.nextNumber++, overdraft);
        this._accounts.push(account);
        return account.getNumber();
    }

    closeAccount(number) {
        const index = this._accounts.findIndex(account => account.getNumber() === number);
        if (index === -1) {
            throw Error("Account not found");
        }
        this._accounts.splice(index, 1);
    }

    accountReport() {
        return this._accounts.map(account => account.toString()).join("\n");
    }

    endOfMonth() {
        return this._accounts.map(account => account.endOfMonth()).join("\n");
    }
}