import {HelmetProvider} from 'react-helmet-async'

import {Routers} from './Routers'

const Main = () => {
    return (
        <HelmetProvider>
            <Routers />
        </HelmetProvider>
    )
}

export {Main}