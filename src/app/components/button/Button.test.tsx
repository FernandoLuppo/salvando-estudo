import { Button } from "./Button"
import { render } from "@testing-library/react"
describe("<Button>", () => {
  it("should render button", () => {
    const { getByText, getByRole } = render(<Button>ola</Button>)

    const buttonElement = getByRole("button")
    const buttonTextElement = getByText("ola")

    expect(buttonElement).toBeInTheDocument()
    expect(buttonTextElement).toBeInTheDocument()
  })

  it(`should render "Loading..." text when isLoading was passed`, () => {
    const { getByText } = render(<Button isLoading>ola</Button>)

    const isLoadingText = getByText("Loading...")

    expect(isLoadingText).toBeInTheDocument()
  })

  it("should render the button with background color green by default", () => {
    const { getByRole } = render(<Button>ola</Button>)

    const buttonElement = getByRole("button")

    expect(buttonElement).toHaveStyle({ backgroundColor: "green" })
  })

  it("should render the button with background color reed when color=red was passed", () => {
    const { getByRole } = render(<Button color="red">ola</Button>)

    const buttonElement = getByRole("button")

    expect(buttonElement).toHaveStyle({ backgroundColor: "red" })
  })
})
