import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #a9a9ff;
    min-height: 100vh;
    width: 100%;
    padding: 30px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h1 {
        text-align: center;
        color: #17132d;
        margin: 0;
    }
`
export const RegisterSection = styled.div`
    background-color: #f0efff;
    padding: 16px;
    border-radius: 10px;

    width: 100%;
    max-width: 780px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        margin: 0;
        color: #292047;
    }

    form {
        display: flex;
        gap: 8px;
        width: 100%;
    }

    input {
        flex: 1;
        min-width: 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }

    input:focus {
        border-color: #8000bd;
    }

    button {
        background-color: #8000bd;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #620091;
    }

    
`
export const ListSection = styled.div`
    background-color: #f0efff;
    padding: 16px;
    border-radius: 10px;

    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 16px;

    overflow-x: auto;

    h2 {
        margin: 0;
        color: #292047;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
    }

    th {
        background-color: #8000bd;
        color: white;
        padding: 12px;
        white-space: nowrap;
    }

    td {
        padding: 12px;
        border-bottom: 1px solid #d0cdea;
        
    }

    tbody tr:hover {
        background-color: #dedcff;
    }


`
export const ActionButton = styled.button`
    background-color: ${props => props.delete ? '#ff4d4d' : '#8000bd'};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    cursor: pointer; 
    margin-bottom: 3px;

    
    button {
        background-color: ${props => props.$delete ? '#ff4d4d' : '#8000bd'};;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #620091;
    }
    
`
export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;

    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    z-index: 1000;
`

export const ModalContent = styled.div`
    background-color: #f0efff;
    padding: 24px;
    border-radius: 12px;

    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

    h2 {
        margin: 0;
        color: #292047;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    input {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        outline: none;
    }

    input:focus {
        border-color: #8000bd;
    }

    button {
        padding: 12px;
        border: none;
        border-radius: 6px;
        color: white;
        cursor: pointer;
    }
`

export const ModalActions = styled.div`
    display: flex;
    gap: 10px;

    button {
        flex: 1;
    }

    button:first-child {
        background-color: #8000bd;
    }

    button:last-child {
        background-color: #777;
    }
`
export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 25px;
    padding: 15px;

    span {
        font-size: 16px;
        font-weight: bold;
        color: #4b287a;
    }

    button {
        background-color: #8000bd;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 14px;
        transition: 0.3s;
    }

    button:hover:not(:disabled) {
        background-color: #5e008c;
        transform: scale(1.05);
    }

    button:disabled {
        background-color: #b9a1c7;
        cursor: not-allowed;
        opacity: 0.6;
    }
`
