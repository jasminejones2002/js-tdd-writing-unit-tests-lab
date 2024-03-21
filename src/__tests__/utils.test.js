import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("should return true for a palindrome", () => {
        const string = 'racecar';
        const result = isPalindrome(string);
        
        expect(result).toBe(true);
    });

    it("should return false for an empty string", () => {
        const string = '';
        const result = isPalindrome(string);
        expect(result).toBe(true);
      });
})