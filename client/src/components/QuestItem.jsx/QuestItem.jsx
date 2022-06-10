import React, {useState} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import {useDispatch} from "react-redux";
import {getAnswer} from "../../redux/actions/questAC";

const QuestItem = ({id, price, text}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [answer, setAnswer] = useState('')

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setAnswer(e.target.value)
    console.log(answer)
  }
  const answerHandler = (id, answer) => {
    dispatch(getAnswer(id, answer))
  }

  return (
    <ListGroupItem>
      <div>
        <Button
          color="primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {price}
        </Button>
        <Modal
          centered
          fullscreen="false"
          size=""
          isOpen={isOpen}
        >
          <ModalHeader >
            {price}
          </ModalHeader>
          <ModalBody>
            {text}
            {' '}
            <Input
              onChange={inputHandler}
              placeholder="Ваш ответ"
              rows={1}
              type="textarea"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {answerHandler(id, answer)
              setIsOpen(!isOpen)
              }}
            >
              Ответить
            </Button>
            {' '}
            <Button onClick={() => setIsOpen(!isOpen)}>
              Закрыть
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </ListGroupItem>
  )
}

export default QuestItem
