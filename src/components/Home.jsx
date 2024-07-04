import {Link, Outlet} from 'react-router-dom'

const Home = () => {

    return (
        <>
        <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/your-library'>Your Library</Link></li>
                    <li><Link to='/play'>Play</Link></li>
                </ul>
            </nav>
            <Outlet />
            <h1>Pokemon Game</h1>
            <h2>Hey there Pokemon Player!</h2>
                    <p>Here are some rules to the game:</p>
                    <ul>
                        <li>Head over to the Play tab</li>
                        <li>Pick 2 random Pokemon Cards</li>
                        <li>Whoever has the highest HP wins!</li>
                    </ul>
        </>
    )
}



export default Home; 