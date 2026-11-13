import { useEffect, useState } from "react"
import axios from 'axios'
import { ListSection, MainContainer, RegisterSection } from "./styled"

export function Main() {
    const [equips, setEquips] = useState([])
    const [formData, setFormData] = useState({
        nome: '',
        categoria: '',
        status: '',
        numeroDeSerie: '',
    })
    
    const fetchEquips = async () => {
        const response = await axios.get('http://localhost:3000/equips/')
        setEquips(response.data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post('http://localhost:3000/equips/', formData)

        setEquips([...equips, formData])
        console.log(response)
    }
    
    useEffect(() => {
        fetchEquips();
    }, [equips])
    

    return (
        <MainContainer>
            <h1>Sistema de cadastro de equipamento do Senai 2000</h1>

            <RegisterSection>
                <h2>Cadastro de equipamento:</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        placeholder="categoria" 
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        placeholder="status" 
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        placeholder="numero de serie" 
                        name="numeroDeSerie"
                        value={formData.numeroDeSerie}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </RegisterSection>

            <ListSection>
                <h2>Lista de Usuários:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>nome</th>
                                    <th>categoria</th>
                                    <th>status</th>
                                    <th>data de cadastro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    equips.map((equip) => (
                                        <tr key={equip.id}>
                                            <td>{equip.nome}</td>
                                            <td>{equip.categoria}</td>
                                            <td>{equip.status}</td>
                                            <td>{equip.dataDeAquisicao}</td>
                                            <td>{equip.numeroDeSerie}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
            </ListSection>
            
        </MainContainer>
    )
};
