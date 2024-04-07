import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function MyForm() {
  let tg = window.Telegram.WebApp
  return (
    <Container>

    <Form>

      <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Введите свое имя" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Выберите организацию</option>
          <option value="1">ГБОУ РИЛИ</option>
          <option value="2">УГНТУ</option>
          <option value="3">УУНИТ</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Выберите режим игр</option>
          <option value="1">Рандомный</option>
          <option value="2">Чемпионат</option>
          <option value="3">Вызов соперника</option>
        </Form.Select>
      </Form.Group>
    </Form>

    </Container>
  );
}

export default MyForm;