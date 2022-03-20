import React, {ChangeEvent, KeyboardEvent} from 'react'

type InputType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
}

export const Input = ({title, setTitle, ...props}: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.callback()
        }
    }
    return (
        <input value={title}
               onKeyPress={onKeyPressHandler}
               onChange={onChangeHandler}
        />
    )
}