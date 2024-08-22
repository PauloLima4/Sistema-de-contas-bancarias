const BankAccount = require('./BankAccount');
const SavingsAccount = require('./SavingsAccount');

// Criando instâncias de BankAccount e SavingsAccount
const contaCorrente = new BankAccount('John', 1000.00);
const contaPoupanca = new SavingsAccount('Mary', 1.5, 2000);

// Realizando operações na conta corrente
contaCorrente.deposit(500);
contaCorrente.withdraw(300);
console.log('========================================================');

// Realizando operações na conta poupança
contaPoupanca.applyInterest();
contaPoupanca.withdraw(500);
