pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!
// contract code will go here

contract inbox{

     string private message;

    function inbox(string inicialMessage) public{
        message = inicialMessage;
    }

    function setMessage (string newMessage) public {
        message = newMessage;        
    }

    function getMessage() public view returns (string){
        return message;
    }
}