import { FormEvent, useState, } from "react"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import { Container, TransactionTipeContainer, RadioBox } from './styles'
import { useTransaction } from "../../hooks/useTransactions"

interface newTransactionModalProps {
  isOpem: boolean;
  onRequestClose: () => void;
}


export function NewTrasactionModal({ isOpem, onRequestClose }: newTransactionModalProps) {

  const { createTransaction } = useTransaction()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,

    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTipeContainer>

          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg}
              alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"

          >
            <img src={outcomeImg}
              alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTipeContainer>
        <input type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}