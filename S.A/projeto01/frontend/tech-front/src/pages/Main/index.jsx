import { useEffect, useState } from "react"
import axios from "axios"
import { ListSection, MainContainer, RegisterSection, ModalOverlay, ModalContent, ModalActions, ActionButton, Pagination } from "./styled"

export function Main() {

    const [equips, setEquips] = useState([])

    const [formData, setFormData] = useState({
        nome: "",
        categoria: "",
        status: "",
        numeroDeSerie: "",
    })

    const [editingId, setEditingId] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const [pagina, setPagina] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const fetchEquips = async () => {
        try {
            const response = await axios.get("http://localhost:3000/equips", {
                params: {
                    page: pagina,
                    limit: 10
                }
            })

            console.log("Resposta da API:", response.data)

            setEquips(response.data.equips)
            setTotalPages(response.data.totalPages)
        } catch (error) {
            console.error("Erro ao buscar equipamentos:", error)
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (editingId !== null) {

                await axios.put(
                    `http://localhost:3000/equips/${editingId}`,
                    formData
                )

                setShowModal(false)
                setEditingId(null)

            } else {

                await axios.post(
                    "http://localhost:3000/equips/",
                    formData
                )
            }

            setFormData({
                nome: "",
                categoria: "",
                status: "",
                numeroDeSerie: "",
            })

            await fetchEquips()

        } catch (error) {
            console.error("Erro ao salvar equipamento:", error)
        }
    }

    const handleDelete = async (id) => {
        const confirmar = window.confirm(
            "Tem certeza que deseja excluir este equipamento?"
        )
        if (!confirmar) return
        try {
            await axios.delete(
                `http://localhost:3000/equips/${id}`
            )
            await fetchEquips()
        } catch (error) {
            console.error("Erro ao excluir equipamento:", error)
        }
    }
    const handleEdit = (equip) => {
        setFormData({
            nome: equip.nome,
            categoria: equip.categoria,
            status: equip.status,
            numeroDeSerie: equip.numeroDeSerie
        })

        setEditingId(equip.id)
        setShowModal(true)
    }
    const handleCancelEdit = () => {
        setShowModal(false)
        setEditingId(null)

        setFormData({
            nome: "",
            categoria: "",
            status: "",
            numeroDeSerie: ""
        })
    }
    useEffect(() => {
        fetchEquips()
    }, [pagina])

    return (
        <MainContainer>
            <h1>Sistema de Controle de Equipamentos</h1>
            <RegisterSection>
                <h2>Cadastro de equipamento</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Número de série"
                        name="numeroDeSerie"
                        value={formData.numeroDeSerie}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </RegisterSection>
            <ListSection>
                <h2>Lista de equipamentos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Status</th>
                            <th>Data de cadastro</th>
                            <th>Número de série</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equips.map((equip) => (
                            <tr key={equip.id}>
                                <td>{equip.nome}</td>
                                <td>{equip.categoria}</td>
                                <td>{equip.status}</td>
                                <td>
                                    {new Date(equip.dataDeAquisicao.replace(' ', 'T'))
                                        .toLocaleString('pt-BR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: false
                                        })}
                                </td>
                                <td>{equip.numeroDeSerie}</td>
                                <td>
                                    <ActionButton
                                        onClick={() => handleEdit(equip)}
                                    >
                                        Editar
                                    </ActionButton>
                                    <ActionButton
                                        $delete
                                        onClick={() => handleDelete(equip.id)}
                                    >
                                        Excluir
                                    </ActionButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination>
                    <button
                        onClick={() => setPagina(pagina - 1)}
                        disabled={pagina <= 1}
                    >
                        Anterior
                    </button>
                    <span>
                        Página {pagina} de {totalPages}
                    </span>
                    <button
                        onClick={() => setPagina(pagina + 1)}
                        disabled={pagina >= totalPages || totalPages === 0}
                    >
                        Próxima
                    </button>
                </Pagination>
            </ListSection>
            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <h2>Editar equipamento</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="categoria"
                                placeholder="Categoria"
                                value={formData.categoria}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="numeroDeSerie"
                                placeholder="Número de série"
                                value={formData.numeroDeSerie}
                                onChange={handleInputChange}
                                required
                            />
                            <ModalActions>
                                <button type="submit">
                                    Salvar alterações
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                >
                                    Cancelar
                                </button>
                            </ModalActions>
                        </form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </MainContainer>
    )
}