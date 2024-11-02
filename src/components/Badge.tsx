export default function Badge(props: {
    text?: string,
    className?: string,
}) {
    return (
        <>
        <span className={"rounded-full px-3 py-2 w-fit " + props.className}>
            {props.text}
        </span>
        </>
    )
}