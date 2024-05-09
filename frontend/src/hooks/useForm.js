import { ChangeEvent, useState } from "react"

export function useForm(intialize) {
    const [formulario, setformulario] = useState(intialize)
    const onChange = ({ target} ) => {
        const { name, value } = target
        setformulario({
            ...formulario,
            [name]: value
        })

    }

    return {
        onChange,
        formulario
    }

}