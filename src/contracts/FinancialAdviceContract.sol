// contracts/FinancialAdviceContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FinancialAdviceContract {
    function getLoanAdvice(bool isRepaid) public pure returns (string memory) {
        if (isRepaid) {
            return "Congratulations! You have repaid your loan. Consider saving for the future.";
        } else {
            return "Your loan is still active. It's important to repay it on time to avoid penalties.";
        }
    }
}
