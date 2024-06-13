import { FirstMessage } from "./FirstMessage"

export const App = () => {
    const nombre = 'Omar Osorio'
    return (
        <>
            <div className="container">
                <h1>Welcome to my app</h1>
                <h2>Hola {nombre}</h2>
                <hr />
                <FirstMessage name="Hola mundo" edad={30} ></FirstMessage>
            </div>
        </>
    )
}
