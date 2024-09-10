// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract MyContract {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 dueDate;
        bool isRepaid;
    }

    mapping(address => Loan) private loans;

    event LoanApplied(address indexed borrower, uint256 amount, uint256 dueDate);
    event LoanRepaid(address indexed borrower, uint256 amount);

    function applyForLoan(uint256 _amount, uint256 _dueDate) public {
        loans[msg.sender] = Loan({
            borrower: msg.sender,
            amount: _amount,
            dueDate: _dueDate,
            isRepaid: false
        });

        emit LoanApplied(msg.sender, _amount, _dueDate);
    }

    function repayLoan() public payable {
        Loan storage loan = loans[msg.sender];
        require(loan.amount > 0, "No loan to repay");
        require(msg.value == loan.amount, "Repay the exact loan amount");
        require(!loan.isRepaid, "Loan already repaid");

        loan.isRepaid = true;

        emit LoanRepaid(msg.sender, loan.amount);
    }

    function checkLoanStatus() public view returns (bool, uint256, address, uint256) {
        Loan memory loan = loans[msg.sender];
        return (loan.isRepaid, loan.amount, loan.borrower, loan.dueDate);
    }
}