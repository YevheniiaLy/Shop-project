type TitleProps = {
    title: string
    num?: number //значення необов'язкове
}
const Title = ({ title, num = 5 }: TitleProps) => {
    //дефолтне значення
    return (
        <h1>
            Hello {title} {num}
        </h1>
    )
}

export default Title
