import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react';
import { NewTrasactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpem, setIsNewTransactionModalOpem] = useState(false)

  function handleeOpemNewTransictionModal() {
    setIsNewTransactionModalOpem(true)
  }

  function handleeCloseNewTransictionModal() {
    setIsNewTransactionModalOpem(false)
  }
  return (

    <>
      <Header onOpemNewTransactionModal={handleeOpemNewTransictionModal} />

      <Dashboard />

      <NewTrasactionModal
        isOpem={isNewTransactionModalOpem}
        onRequestClose={handleeCloseNewTransictionModal}
      />

      <GlobalStyle />
    </>
  );
}
