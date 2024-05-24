import { act, render } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => render(<RestaurantMenu />));
});
