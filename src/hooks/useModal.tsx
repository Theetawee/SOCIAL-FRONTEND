import { ModalContext } from "../context/ModalContext"
import { useContext } from "react"


const useModal = () => {

    const { isOpen, toggleModal } = useContext(ModalContext);

  return (
    {
        isOpen,
        toggleModal
    }
  )
}

export default useModal