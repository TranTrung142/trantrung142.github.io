// a) Create a test.js file, and write Mocha / Chai test for each of the methods to test that everything works as expected.

describe('Test Account class', function() {
    it('Test deposit method', function() {
        let acc = new Account(123);
        acc.deposit(100);
        assert.equal(acc.getBalance(), 100);
    });

    it('Test withdraw method', function() {
        let acc = new Account(123);
        acc.deposit(100);
        acc.withdraw(50);
        assert.equal(acc.getBalance(), 50);
    });

    it('Test toString method', function() {
        let acc = new Account(123);
        acc.deposit(100);
        assert.equal(acc.toString(), "Account 123: balance 100");
    });
});

describe('Test SavingsAccount class', function() {
    it('Test addInterest method', function() {
        let acc = new SavingsAccount(123, 10);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(), 110);
    });

    it('Test toString method', function() {
        let acc = new SavingsAccount(123, 10);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.toString(), "Savings Account 123: balance 110: interest 10");
    });
});

describe('Test CheckingAccount class', function() {
    it('Test withdraw method', function() {
        let acc = new CheckingAccount(123, 50);
        acc.deposit(100);
        acc.withdraw(150);
        assert.equal(acc.getBalance(), -50);
    });

    it('Test toString method', function() {
        let acc = new CheckingAccount(123, 50);
        acc.deposit(100);
        acc.withdraw(50);
        assert.equal(acc.toString(), "Checking Account 123: balance 50: overdraft limit 50");
    });
});

describe('Test Bank class', function() {
    it('Test addAccount method', function() {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Test addSavingsAccount method', function() {
        let bank = new Bank();
        bank.addSavingsAccount(10);
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Test addCheckingAccount method', function() {
        let bank = new Bank();
        bank.addCheckingAccount(50);
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Test closeAccount method', function() {
        let bank = new Bank();
        const accountNumber = bank.addAccount();
        bank.closeAccount(accountNumber);
        assert.equal(bank.getAccounts().length, 0);
    });

    it('Test accountReport method', function() {
        let bank = new Bank();
        const accountNumber = bank.addAccount();
        const savingsAccountNumber = bank.addSavingsAccount(10);
        const checkingAccountNumber = bank.addCheckingAccount(50);
        assert.equal(bank.accountReport(), `Account ${accountNumber}: balance 0\nSavings Account ${savingsAccountNumber}: balance 0: interest 10\nChecking Account ${checkingAccountNumber}: balance 0: overdraft limit 50`);
    });
});

describe('Test Bank class (endOfMonth)', function() {
    it('Test endOfMonth method', function() {
        let bank = new Bank();
        bank.addAccount();

        const savingsAccountNumber = bank.addSavingsAccount(10);
        const savingsAccount = bank.getAccount(savingsAccountNumber);
        savingsAccount.deposit(100);

        const checkingAccountNumber = bank.addCheckingAccount(50);
        const checkingAccount = bank.getAccount(checkingAccountNumber);
        checkingAccount.deposit(100);
        checkingAccount.withdraw(150);

        const endOfMonthResult = bank.endOfMonth();
        console.log(endOfMonthResult);
        assert.equal(endOfMonthResult, "\nInterest added SavingsAccount 9: balance: 110 interest: 10\nWarning, low balance CheckingAccount 10: balance: -50 overdraft limit: 50");
    });
});