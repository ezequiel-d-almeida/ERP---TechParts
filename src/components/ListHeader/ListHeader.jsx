export function ListHeader({
    columns
}) {
    return (
        <div className="list-header">
            {columns.map((column, index) => (
                <span key={index}>
                    {column.label}
                </span>
            ))}
        </div>
    )
}