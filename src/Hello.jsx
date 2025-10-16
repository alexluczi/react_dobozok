function Hello({name, age}) {
    return (
    <>
        <h1>Szia, {name}!</h1>
        <div>{age + 1} éves vagy!</div>
    </>
    );
}

export default Hello;