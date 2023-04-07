import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe("<Counter />", () => {
  it("should add one more when button was clicked", () => {
    render(<Counter />)

    const buttonElementAdd = screen.getByRole("button", { name: "Acrescentar" })
    const counterElement = screen.getByText("0")

    expect(buttonElementAdd).toBeVisible()
    expect(counterElement).toBeVisible()

    fireEvent.click(buttonElementAdd)

    expect(counterElement.innerHTML).toBe("1")
  })

  it("should remove one when button was clicked", () => {
    render(<Counter />)

    const buttonElementRemove = screen.getByRole("button", { name: "Retirar" })
    const counterElement = screen.getByText("0")

    fireEvent.click(buttonElementRemove)

    expect(counterElement.innerHTML).toBe("-1")
  })

  it("should be zero when button was clicked", () => {
    render(<Counter />)

    const buttonElementZero = screen.getByRole("button", { name: "Zerar" })
    const counterElement = screen.getByText("0")

    fireEvent.click(buttonElementZero)

    expect(counterElement.innerHTML).toBe("0")
  })
})
