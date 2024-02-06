import React from "react"

interface ContainerProps {
  children: React.ReactNode;
  bgColor?: boolean
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, bgColor } = props
  return(
    <div className="px-8 py-4 md:px-16 md:py-8" style={{ backgroundColor: bgColor ? '#fafafa' : '#ffffff' }}>
      { children }
    </div>
  )
}