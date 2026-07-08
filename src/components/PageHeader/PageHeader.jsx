import { Link } from "react-router-dom";

export function PageHeader({
    title,
    buttonText,
    buttonPath
}) {
    return (
        <header className="page-header">
            <h2 className="page-header__title">
                {title}
            </h2>

            <Link
                className="btn btn--primary"
                to={buttonPath}
            >
                {buttonText}
            </Link>
        </header>
    );
}   