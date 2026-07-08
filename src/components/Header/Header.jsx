export function Header() {
    return (
        <header id="header">

            <h1 className="header__title">
                TechParts
            </h1>

            <nav className="header__actions">

                <button className="btn btn--secondary">
                    Usuário
                </button>

                <button className="btn btn--secondary">
                    Configurações
                </button>

                <button className="btn btn--danger">
                    Sair
                </button>

            </nav>

        </header>
    )
}