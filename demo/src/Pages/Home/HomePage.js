import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'

// hooks
import {useWindowScroll} from 'Hooks'

const HomePage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <main>
                <h1>FTS Demo</h1>
                <hr/>

                <Link to='/button'>Button</Link><br />
                <Link to='/modal'>Modal</Link><br />
            </main>
        </>
    )
}

export {HomePage}