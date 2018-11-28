import * as chai from "chai";
import chaiHttp = require("chai-http");

import { app } from "../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

describe("slash route", () => {
    it("should respond with HTTP 200 status", () => {
        return chai.request(app)
            .get("/")
            .then(res => {
                expect(res.status).to.be.equal(200);
            });
    });
});
