import { fireEvent, render, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body componenet", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
});

it("Should search reslist for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const initialCards = screen.getAllByTestId("resCard");

  expect(initialCards.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");

  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const initialCards = screen.getAllByTestId("resCard");

  expect(initialCards.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(topRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard");

  expect(cardAfterFilter.length).toBe(10);
});
