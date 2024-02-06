"use client";
import GridLayout from "react-grid-layout"
"/node_modules/react-grid-layout/css/styles.css"
"/node_modules/react-resizable/css/styles.css"
import "./style.css";

export interface ReactGridLayoutProps {
  col: number
  layout: GridLayout.Layout[]
  components?: { key: string, component: JSX.Element }[]
}

export const ReactGridLayout = (props: ReactGridLayoutProps) => {
  const { col, layout, components } = props


  return (
    <GridLayout
      layout={layout}
      className="layout"
      isDraggable={true}
      isResizable={true}
      margin={[12, 12]}
      containerPadding={[0, 0]}
      rowHeight={30}
      width={1024}
      cols={col}
      draggableCancel=".preventDrag"
    >
      {components?.map((item) => (
        <div key={item.key} style={{ width: 'auto', height: '100%', display: 'flex' }}>
          {item.component}
        </div>
      ))}
    </GridLayout>
  )
}