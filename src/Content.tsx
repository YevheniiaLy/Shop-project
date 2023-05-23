type ContentProps = {
    text1: string
    text2: string
}
export const Content = ({ text1, text2 }: ContentProps) => {
    //дефолтне значення
    return (
        <>
            <p className="red">{text1}</p>
            <p>{text2}</p>
        </>
    )
}
