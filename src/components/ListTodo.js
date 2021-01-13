import React, { useEffect, useState } from "react"
import { Pane, Button, TrashIcon, toaster, IconButton, Strong } from "evergreen-ui"

export default function ListTodo({ list, removeElement }){

  const [width, setWidth] = useState()

  const getElement = (e) => {
    removeElement(e.target.dataset.element)
    toaster.success(`${e.target.dataset.element} à été retiré de la todo list !`)
  }

  useEffect(() => { 
    if(window.innerWidth >= 576){
      setWidth(true)
    }else{
      setWidth(false)
    }

    window.addEventListener("resize", (e) => {
      if(window.innerWidth >= 576){
        setWidth(true)
      }else{
        setWidth(false)
      }
    }) 
  }, [])

    return (
        <Pane
        height="50%"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        padding={18}
        className="responsiveView"
        >
          { list.map((element, index) => (
            <Pane
              key={index}
              display="flex"
              flex="1"
              justifyContent="space-between"
              alignItems="center"
              padding={18}
              backgroundColor="#E4E7EB"
              margin={18}
            >
                <Strong size={300} color="#00783E">
                {element}
                </Strong>

              { width && width === true ? (
                <Button 
                marginY={0} 
                marginRight={12} 
                iconBefore={TrashIcon} 
                intent="danger" 
                onClick={getElement} 
                data-element={element}
                >
                  Delete
                </Button>
              ): (
                <IconButton 
                  icon={TrashIcon} 
                  intent="danger"
                  onClick={getElement}
                  data-element={element}
                />
              )}
            </Pane>
          ))}
        </Pane>
    )
}