import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("Should load Restaurant Menu Components xD", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianheader = screen.getByText("Veg Pizza (14)");

  fireEvent.click(accordianheader);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);
});

it("should load Restauarant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length);
});
