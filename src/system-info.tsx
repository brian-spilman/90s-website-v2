
type SystemProps = {
    name: string,
    company: string,
    year: number,
    img: string
}

export function SystemInfo(props: SystemProps){

    const {name, company, year, img} = props;

    return <>

        <h4>{name}</h4>
        <h5>{company}</h5>
        <h5>{year}</h5>
        <img src={img}/>

    </>

}