import React, { useRef } from "react"
import { Pane, TextInput, Button, toaster} from "evergreen-ui"

export default function Input({ addElement }){

    const todoRef =  useRef("todo")

    const getItem = () => {
        addElement(todoRef.current.value)
        toaster.success(`${todoRef.current.value} à été ajouté à la liste !`)
        todoRef.current.value = ""
    }

    return (
        <Pane
        height="50%"
        display="flex"
        justifyContent="center"
        className="responsiveView"
        padding={18}
        >
          <TextInput
            name="todo"
            ref={todoRef}
            flex="1"
            placeholder="Ajouter un élément"
          />
          <Button
            appearance="primary"
            intent="success"
            textAlign="center"
            onClick={getItem}
          >
            Ajouter
          </Button>
        </Pane>
    )
}