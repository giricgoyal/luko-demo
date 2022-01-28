import { validateEmails } from "@/components/email-invite/utils";
import * as utils from "@/endpoints/utils";

describe("components/email-invite/utils", () => {
  describe("validateEmails", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    describe("When email list has invalid emails (invalid format - client check)", () => {
      let result: string[];
      beforeEach(async () => {
        jest.spyOn(utils, "validateEmail").mockImplementation(async () => ({
          mx_found: false,
          format_valid: true,
          domain: "a.com",
        }));
        result = await validateEmails(["_a@a.com"]);
      });
      it("should not call validateEmail", () => {
        expect(utils.validateEmail).toHaveBeenCalledTimes(0);
      });
      it("should return correct errors list", () => {
        expect(result).toStrictEqual(["_a@a.com is invalid."]);
      });
    });

    describe("When email list has invalid emails (domain not configured)", () => {
      let result: string[];
      beforeEach(async () => {
        jest.spyOn(utils, "validateEmail").mockImplementation(async () => ({
          mx_found: false,
          format_valid: true,
          domain: "a.com",
        }));
        result = await validateEmails(["a@a.com"]);
      });
      it("should call validateEmail", () => {
        expect(utils.validateEmail).toHaveBeenCalledWith("a@a.com");
      });
      it("should return correct errors list", () => {
        expect(result).toStrictEqual([
          "a@a.com is invalid. a.com Domain is not configured to receive emails.",
        ]);
      });
    });

    describe("When email list has invalid emails (email does not exist.)", () => {
      let result: string[];
      beforeEach(async () => {
        jest.spyOn(utils, "validateEmail").mockImplementation(async () => ({
          mx_found: true,
          format_valid: true,
          smtp_check: false,
          domain: "gmail.com",
        }));
        result = await validateEmails(["a@gmail.com"]);
      });
      it("should call validateEmail", () => {
        expect(utils.validateEmail).toHaveBeenCalledWith("a@gmail.com");
      });
      it("should return correct errors list", () => {
        expect(result).toStrictEqual(["a@gmail.com does not exist."]);
      });
    });

    describe("When email list has valid email.", () => {
      let result: string[];
      beforeEach(async () => {
        jest.spyOn(utils, "validateEmail").mockImplementation(async () => ({
          mx_found: true,
          format_valid: true,
          smtp_check: true,
          domain: "getluko.com",
        }));
        result = await validateEmails(["cover@getluko.com"]);
      });
      it("should call validateEmail", () => {
        expect(utils.validateEmail).toHaveBeenCalledWith("cover@getluko.com");
      });
      it("should return correct errors list", () => {
        expect(result).toStrictEqual([]);
      });

      describe("When email list has same valid email along with other emails", () => {
        let result: string[];
        beforeEach(async () => {
          jest.spyOn(utils, "validateEmail").mockImplementation(async () => ({
            mx_found: true,
            format_valid: true,
            smtp_check: true,
            domain: "ok-notok.com",
          }));
          result = await validateEmails([
            "cover@getluko.com",
            "test@ok-notok.com",
          ]);
        });
        it("should call validateEmail", () => {
          expect(utils.validateEmail).toHaveBeenCalledWith("test@ok-notok.com");
        });
        it("should return correct errors list", () => {
          expect(result).toStrictEqual([]);
        });
      });
    });
  });
});
