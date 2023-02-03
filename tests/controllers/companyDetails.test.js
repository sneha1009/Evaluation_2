
const service = require("../../src/services/companyDetails.servic");
const controller = require("../../src/controllers/companyDetails.controller");

describe("Company Details", () =>
  describe("Enter the company details", () => {
    it("should enter the details ", async () => {
      jest.spyOn(service, "getCsvData").mockResolvedValue({ id: 1 });
      const mockRes = { send: jest.fn() };
      await controller.postDetails({
        body: {
          id: 12,
          isComplete: false,
          name: "test"
        },
      }, mockRes);
      expect(mockRes.send).toBeCalledWith({ id: 1 });
    });
  })
);
