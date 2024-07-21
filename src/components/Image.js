export default function Image(props) {
    console.log(props, "propss..");

    const { title, imgSrc } = props;

    return (
        <>
            <p>{title}</p>
            <p>{imgSrc}</p>
        </>
    );
}