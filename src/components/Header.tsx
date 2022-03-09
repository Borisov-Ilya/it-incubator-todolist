import React from "react";

type PropsType = {
    title: string
}

export const Header = (props: PropsType) => {
    return (
        <>{props.title}</>
    )
}