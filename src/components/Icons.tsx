
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string
    size: number
    color: string
}>


const Icons = ({ name }: IconProps) => {

    switch (name) {
        case 'circle':
            return <Icon name={"circle-thin"} size={30} color={"#F7CD2E"} />
        case 'cross':
            return <Icon name={"times"} size={30} color={"#E16363"} />

        default:
            return <Icon name={"pencil"} size={30} color={"#F7CD2E"} />
    }



}

export default Icons

