import Homepage from "./Homepage";
import Summary from "./Summary";

export const routes = [
  {
    path: "/react-summary-app/",
    exact: true,
    element: Homepage
  },
  {
    path: "/react-summary-app/:username",
    exact: true,
    element: Summary
  }
];