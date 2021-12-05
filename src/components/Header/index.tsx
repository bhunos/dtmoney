import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps {
  onOpemNewTransactionModal: () => void;
}

export function Header({ onOpemNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DtMoney" />
        <button type="button" onClick={onOpemNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  );
}