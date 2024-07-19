import { useModal } from '../../hooks/useModal'

import Modal from './Modal'

export default function ModalContainer() {
	const { isOpen, openModal, closeModal } = useModal()

	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			{isOpen ? <Modal onClose={closeModal} /> : null}
		</>
	)
}
