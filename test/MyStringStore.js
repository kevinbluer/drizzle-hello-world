const MyStringStore = artifacts.require("./MyStringStore.sol");

contract("MyStringStore", accounts => {
  it("should store the string 'Hello Universe'", async () => {
    const myStringStore = await MyStringStore.deployed();

    await myStringStore.set("Hello Universe", {from: accounts[0]});

    const storedString = await myStringStore.myString.call();

    assert.equal(storedString, "Hello Universe", "The string was not stored");
  })
});
