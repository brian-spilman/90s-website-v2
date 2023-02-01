
type GameProps = {
    name: string,
    system: string,
    release: string,
    length: number,
    img: string
}

export function GameInfo(props: GameProps){

    const {name, system, release, length, img} = props;

    return <>

        <h4>{name}</h4>
        <h5>{system}</h5>
        <img src={img}/>
        <dl>
            {release === "USA" ? <>
                <dt>Release</dt>
                <dd>{release}</dd>
                <dt>Length (Hours)</dt>
                <dd>{length}</dd>
            </>: <><dt>Release</dt>
                <dd>{release}</dd>
                </>}
        </dl>

    </>

}

