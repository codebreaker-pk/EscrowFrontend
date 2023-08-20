
// EscrowContract.sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract EscrowContract {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public amount;
    bool public releaseApproved;
    bool public refundApproved;

    event FundsDeposited(address indexed depositor, uint256 amount);
    event FundsReleased(uint256 amount);
    event FundsRefunded(uint256 amount);

    constructor(address _seller, address _arbiter) {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
    }

    function depositFunds() external payable {
        require(msg.sender == buyer, "Only the buyer can deposit funds");
        require(msg.value > 0, "Amount must be greater than zero");
        amount += msg.value;
        emit FundsDeposited(msg.sender, msg.value);
    }

    function releaseFunds() external {
        require(
            msg.sender == seller || msg.sender == arbiter,
            "Only the seller or arbiter can release funds"
        );
        require(!releaseApproved && !refundApproved, "Funds have already been released or refunded");
        releaseApproved = true;
        payable(seller).transfer(amount);
        emit FundsReleased(amount);
    }

    function refundBuyer() external {
        require(msg.sender == arbiter, "Only the arbiter can refund the buyer");
        require(!releaseApproved && !refundApproved, "Funds have already been released or refunded");
        refundApproved = true;
        payable(buyer).transfer(amount);
        emit FundsRefunded(amount);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
