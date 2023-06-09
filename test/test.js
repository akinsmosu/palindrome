
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function(){
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    })

    it("should return true for a palindrome with punctutation", function(){
      let puncuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(puncuatedPalindrome.palindrome());
    });
  });

  describe("#letters", function(){
    it("should return onlty letters", function(){
      let puncuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(puncuatedPalindrome.letters(), "MadamImAdam"); 
    });
  });
});
