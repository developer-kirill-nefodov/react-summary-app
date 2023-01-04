import Homepage from "./Homepage";
import Summary from "./Summary";

export const routes = [
  {
    path: "/",
    exact: true,
    element: Homepage
  },
  {
    path: "/:username",
    exact: true,
    element: Summary
  }
];