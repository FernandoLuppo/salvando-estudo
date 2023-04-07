import { useState } from "react"

export const Card: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const handleOpen = (): void => {
    setVisible(true)
  }

  return (
    <div role="contentinfo">
      <h2>Card</h2>

      <button onClick={handleOpen}>open</button>

      {visible && (
        <div role="main">
          <p>Content</p>
        </div>
      )}
    </div>
  )
}
