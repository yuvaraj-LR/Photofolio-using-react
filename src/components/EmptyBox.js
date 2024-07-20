
export default function EmptyBox(props) {

    const {text} = props;
    console.log(text, "textt...");

    return(
        <>
            <h3 className="error_display">{text}</h3>
        </>
    )
}