pragma solidity ^0.4.21;

contract MyStringStore {
  string public myString = "Hello World";
  string public anotherString = "Hello World :)";

  function set(string memory x) public {
    myString = x;
  }
}
