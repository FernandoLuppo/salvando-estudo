interface IButtonProps {
  children: React.ReactNode
  isLoading?: boolean
  color?: "red" | "green"
}

export const Button: React.FC<IButtonProps> = ({
  children,
  isLoading,
  color = "green"
}) => {
  return (
    <button role="button" style={{ backgroundColor: color }}>
      {isLoading === true ? "Loading..." : children}
    </button>
  )
}
