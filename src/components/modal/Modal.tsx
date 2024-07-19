import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
	children?: ReactNode
	onClose: () => void
}

const ModalBG = styled.div`
	position: fixed;
	top: 50%;
  transform: translateY(-50%);
	left: 0;
  
	overflow: auto;
	width: 100%;
	height: 100vh;
	background-color: #3477dd;
`
const ModalContent = styled.div``

export default function Modal({ children, onClose }: Props) {
	return (
		<ModalBG onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<h2>THIS IS MY MODAL</h2>
				{children}
				<button onClick={onClose}>Close Modal</button>
			</ModalContent>
		</ModalBG>
	)
}
