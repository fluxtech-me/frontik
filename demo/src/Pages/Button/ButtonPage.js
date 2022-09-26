import {Helmet} from 'react-helmet-async'

// hooks
import {useWindowScroll} from 'Hooks'

const ButtonPage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    return (
        <>
            <Helmet>
                <title>Button</title>
            </Helmet>
            <main>
                Button Demo
            </main>
        </>
    )
}

export {ButtonPage}