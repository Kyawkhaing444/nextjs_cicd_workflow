import { render, screen } from "@testing-library/react";
import App from "../pages/index";
describe("App", () => {
   it("renders without crashing", () => {
     render(<App />);
     expect(
       screen.getByRole("heading", { name: "Next.js! Production-Grade CICD Workflow" })
     ).toBeInTheDocument();
   });
   it("renders without crashing", () => {
     render(<App />);
     expect(
       screen.getByRole("heading", { name: "Next.js! Production-Grade CICD Workflow" })
     ).toBeInTheDocument();
   });
   it("renders without crashing", () => {
     render(<App />);
     expect(
       screen.getByRole("heading", { name: "Next.js! Production-Grade CICD Workflow" })
     ).toBeInTheDocument();
   });
});
