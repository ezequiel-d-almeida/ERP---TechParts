export function Header() {
    return (
        <header id="header">
            <h1>TechParts</h1>
            <nav id='header__actions'>
                <button className='button__header'>User</button>
                <button className='button__header'>Config</button>
                <button className='button__header'>LogOut</button>   
            </nav>
        </header>
    )
}