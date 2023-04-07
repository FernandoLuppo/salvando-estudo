import { renderHook } from "@testing-library/react"
import { useAuth } from "./useAuth"

describe("useAuth", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.user).toBe(null)
    expect(result.current.isAuthenticate).toBe(false)
    expect(typeof result.current.login).toBe("function")
    expect(typeof result.current.logout).toBe("function")
  })

  it("should isAuthenticate to be false and user to be null when logout was called", () => {
    const { result } = renderHook(() => useAuth())

    const userIsNull = result.current.user
    const isAuthenticateFalse = result.current.isAuthenticate

    result.current.logout()

    expect(userIsNull).toBe(null)
    expect(isAuthenticateFalse).toBe(false)
  })
})
