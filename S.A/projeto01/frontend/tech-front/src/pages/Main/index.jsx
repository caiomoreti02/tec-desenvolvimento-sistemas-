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

    const [busca, setBusca] = useState("")
    const [pagina, setPagina] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const fetchEquips = async () => {
        try {
            const response = await axios.get("http://localhost:3000/equips", {
                params: {
                    page: pagina,
                    limit: 10,
                    busca: busca
                }
            })

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

    const handleNew = () => {
        setFormData({
            nome: "",
            categoria: "",
            status: "",
            numeroDeSerie: "",
        })

        setEditingId(null)
        setShowModal(true)
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

            setShowModal(false)
            setEditingId(null)

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
            numeroDeSerie: equip.numeroDeSerie,
            dataDeAquisicao: equip.dataDeAquisicao
                ? equip.dataDeAquisicao.slice(0, 10)
                : ""
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
            numeroDeSerie: "",
        })
    }

    const formatDate = (date) => {
        if (!date) return ""

        return new Date(date).toLocaleDateString("pt-BR", {
            timeZone: "UTC"
        })
    }

    useEffect(() => {
        fetchEquips()
    }, [pagina, busca])

    return (
        <MainContainer>
            <h1>Sistema de Controle de Equipamentos</h1>
            <RegisterSection>
                <h2>Equipamentos</h2>
                <input
                    type="text"
                    placeholder="Buscar por nome, categoria ou número de série..."
                    value={busca}
                    onChange={(e) => {
                        setBusca(e.target.value)
                        setPagina(1)
                    }}
                />
                <button
                    type="button"
                    onClick={handleNew}
                >
                    Cadastrar equipamento
                </button>
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
                        {equips.length > 0 ? (
                            equips.map((equip) => (
                                <tr key={equip.id}>
                                    <td>{equip.nome}</td>
                                    <td>{equip.categoria}</td>
                                    <td>{equip.status}</td>
                                    <td>
                                        {formatDate(equip.dataDeAquisicao)}
                                    </td>
                                    <td>{equip.numeroDeSerie}</td>
                                    <td>
                                        <ActionButton
                                            type="button"
                                            onClick={() => handleEdit(equip)}
                                        >
                                            Editar
                                        </ActionButton>
                                        <ActionButton
                                            type="button"
                                            $delete
                                            onClick={() => handleDelete(equip.id)}
                                        >
                                            Excluir
                                        </ActionButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">
                                    Nenhum equipamento encontrado.
                                </td>
                            </tr>
                        )}
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
                        <h2>
                            {editingId !== null
                                ? "Editar equipamento"
                                : "Cadastrar equipamento"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome do equipamento"
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
                                name="numeroDeSerie"
                                placeholder="Número de série"
                                value={formData.numeroDeSerie}
                                onChange={handleInputChange}
                                required
                            />
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">
                                    Selecione o status
                                </option>
                                <option value="Disponível">
                                    Disponível
                                </option>
                                <option value="Em uso">
                                    Em uso
                                </option>
                                <option value="Em manutenção">
                                    Em manutenção
                                </option>
                            </select>
                            <ModalActions>
                                <button type="submit">
                                    {editingId !== null
                                        ? "Salvar alterações"
                                        : "Cadastrar"}
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