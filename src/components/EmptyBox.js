
export default function EmptyBox(props) {

    const {text} = props;

    return(
        <>
            <h3 className="error_display">{text}</h3>
        </>
    )
}