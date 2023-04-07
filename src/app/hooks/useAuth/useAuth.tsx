import { useState } from "react"

interface IUserProps {
  name: string
}

export const useAuth = () => {
  const [user, setUser] = useState<IUserProps | null>(null)
  const isAuthenticate = !!user

  const login = ({ login, password }) => {
    const response = {
      name: "Fernando"
    }
    setUser(response)
  }

  const logout = () => {
    setUser(null)
  }

  return {
    user,
    isAuthenticate,
    login,
    logout
  }
}
