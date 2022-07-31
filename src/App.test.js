/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
