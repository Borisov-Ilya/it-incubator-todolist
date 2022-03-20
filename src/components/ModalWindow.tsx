import React from 'react'

type ModalWindowType = {
    name: string
}

export const ModalWindow: React.FC<ModalWindowType> = ({name, children}) => {

    return (
        <div>
            <h1>{name}</h1>
            {children}
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}