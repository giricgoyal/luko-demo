import {
  APILAYERNET_ACCESS_KEY,
  APILAYERNET_ENDPOINT,
} from "@/endpoints/constants";
import { validateEmail } from "@/endpoints/utils";
import axios from "axios";

describe("endpoints/utils", () => {
  describe("validateEmail", () => {
    let result: any;
    beforeEach(async () => {
      jest.spyOn(axios, "get").mockImplementation(async () => ({
        data: "some data",
        status: 200,
      }));
      result = await validateEmail("a@a.com");
    });

    it("should call axios.get", () => {
      expect(axios.get).toHaveBeenLastCalledWith(
        `${APILAYERNET_ENDPOINT}/check`,
        {
          params: {
            access_key: APILAYERNET_ACCESS_KEY,
            email: "a@a.com",
            smtp: 1,
            format: 1,
          },
        }
      );
    });

    it("should return the correct data", () => {
      expect(result).toStrictEqual("some data");
    });
  });
});
