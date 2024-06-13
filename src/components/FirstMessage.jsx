import PropTypes from 'prop-types';

const datos = 'Proyecto de evaluación'
const suma = (a = 1, b = 1) => {
  return a + b;
}

const datosPersonales = {
  nombre: "Omar",
  apellidos: "Martínez"
}

export const FirstMessage = ({name, edad}) => {
  
  return (
    <>
      <h1>Titulo: {name}-{edad+5} </h1>
      <strong> {datosPersonales.nombre} </strong>
      <span className="text-primary"> {suma(56,89)} </span>
      <div className="text-danger"> {datos} </div>
    </>
  )
}
FirstMessage.propTypes = {
  name: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired
}
