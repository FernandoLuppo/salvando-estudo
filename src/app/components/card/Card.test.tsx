import { fireEvent, render, screen } from "@testing-library/react"
import { Card } from "./Card"

describe("<Card />", () => {
  it("should open the component when button was clicked", () => {
    render(<Card />)

    const buttonElement = screen.getByRole("button", { name: "open" })

    expect(screen.queryByRole("main")).not.toBeInTheDocument()

    fireEvent.click(buttonElement)

    const divElement = screen.getByRole("main")

    expect(divElement).toBeVisible()
  })
})
