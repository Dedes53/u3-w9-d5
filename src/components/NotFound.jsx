import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = function () {
  const navigate = useNavigate()
  // navigate è una funzione JS che vi permette di portare l'utente verso una destinazione
  // senza i "difetti" di location.assign() -> ad esempio senza ricaricare la pagina

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <Alert variant="warning">
            <h2>404 - Pagina non trovata</h2>
            <h4>Ti sei perso?</h4>
            <Button
              onClick={() => {
                // location.assign('/') // metodo vanilla JS, funziona ma RICARICA LA PAGINA :(
                navigate('/') // metodo di react-router-dom, SENZA RICARICARE LA PAGINA :)
              }}
            >
              Torna in homepage
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
