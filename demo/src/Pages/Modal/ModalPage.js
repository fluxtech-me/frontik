import {Helmet} from 'react-helmet-async'

// hooks
import {useWindowScroll} from 'Hooks'

const ModalPage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    return (
        <>
            <Helmet>
                <title>Modal</title>
            </Helmet>
            <main>
                Modal Demo
            </main>
        </>
    )
}

export {ModalPage}