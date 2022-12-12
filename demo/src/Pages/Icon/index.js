import React from 'react'
import cx from 'classnames'
import './Icon.scss'

export const Icon = (props) => {
    const {
        size = '',
        name = '',
        color = '',
        className = '',
        animation = '',
        disabled = false,
        ...rest
    } = props

    const {

    } = rest

    const prefix = 'frontik'

    const modifyClassName = (option) => {
        if(!option) return
        return prefix + '-' + option
    }

    const classes = cx(
        // prefix,
        name,
        className,
        animation,
        modifyClassName(size),
        modifyClassName(color),
        {
            'disabled': disabled,
        }
    )

    return (
        <>
            <span
                className={classes}
                {...rest}
            />
        </>
    )
}
