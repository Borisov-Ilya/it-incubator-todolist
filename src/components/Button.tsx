import React from 'react'

type propsButtonType = {
    name: string
    callback: () => void
}

export const Button = (props: propsButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}