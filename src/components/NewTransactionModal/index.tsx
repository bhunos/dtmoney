import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import Modal from "react-modal"
import { Container, TransactionTipeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import { useState } from "react"

interface newTransactionModalProps {
  isOpem: boolean;
  onRequestClose: () => void;
}


export function NewTrasactionModal({ isOpem, onRequestClose }: newTransactionModalProps) {

  const [type, setType] = useState('deposit')


  return (


    <Modal isOpen={isOpem}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-orverlay"
      className="react-modal-content"
    >
      <button type="button"
        onClick={onRequestClose}
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input type="text"
          placeholder="Titulo"
        />
        <input type="number"
          placeholder="Valor"
        />
        <TransactionTipeContainer>

          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
          >
            <img src={incomeImg}
              alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
          >
            <img src={outcomeImg}
              alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTipeContainer>
        <input type="text"
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}