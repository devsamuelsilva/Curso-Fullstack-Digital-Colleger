import { useEffect, useState } from "react"

export function Inputs( ) {
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        birthday: "",
        email: "",
        senha: "",
    });

    //forma mais utilizada no mercado - 
    //o "name" de [e.target."name"] chama a propriedade definida pelo "Name" la dentro do input no html
    //o ...prev e utilizado para manter os dados anteriores que a funcao esta utilizando.
    function handleInput(e) {
        setUser((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    function handleDateShow(value) {
        const date = new Date(value).toLocaleDateString("pt-br", {
            dateStyle: "short",
            hour12: false,
            timeZone: "UTC",
        })
        return date;
    }

    //usado para normamente quando chamar a API -- a funcao so sera executada quando o que esta dentro do [array]
    //for modificado.
    useEffect(() => {
        console.log(user);
    }, [user,
    ])
    //sempre que o user for modificado ele executara a funcao

    function handleName(e) {
        setUser((prev) => {
            return {...prev, name: e.target.value};

        })
    }

    function handleLastName(e) {
        setUser((prev) => {
            return {...prev, lastName: e.target.value};

        })
    }

    return(
        <>
        <h2 className="text-rose-600">Lidando com Inputs no React com useStates</h2>
        <div className="flex flex-col gap-3">
            <input className="border border-black rounded px-2 py-1 outline-none" 
            type="text" placeholder="First Nome" name="name" value={user.name} onChange={handleInput}/>
            <input className="border border-black rounded px-2 py-1 outline-none" 
            type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={handleInput}/>
            <input className="border border-black rounded px-2 py-1 outline-none" 
            type="date" placeholder="Aniverssario" name="birthday" value={user.birthday} onChange={handleInput}/>
            <input className="border border-black rounded px-2 py-1 outline-none" 
            type="email" placeholder="E-mail" name="email" value={user.email} onChange={handleInput}/>
            <input className="border border-black rounded px-2 py-1 outline-none" 
            type="text" placeholder="Senha" name="senha" value={user.senha} onChange={handleInput}/>
        </div>
        <div>
            <p className="text-xl">Nome e Sobrenome - {user.name} {user.lastName}</p> 
            <p className="text-xl">E-mail - {user.email}</p> 
            <p className="text-xl">Aniverssario - {user.birthday && handleDateShow(user.birthday)}</p> 
            <p className="text-xl">Senha - {user.senha}</p> 
        </div>
        </>
    )
}