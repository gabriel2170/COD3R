export default function Jsx(){

    const a = 3
    const b = 4
    const result = a ** b

    const obj = {
        name: 'Gabriel',
        idade: 25
    }

    return(
        <div>
            <h1>JSX é um conceito Central</h1>
            {result}

            <h2>Declarando Objeto</h2>
            <h2>{"letra maiscula".toUpperCase()}</h2>
            <p>
                {JSON.stringify({obj})}
            </p>

        </div>
    )
}