import { Link } from 'react-router-dom'

const InvalidURL = () => {
  return (
    <>
      <h3>Uh Oh!! This page does not exist</h3>
      <Link to="/">Please click here to go back to homepage</Link>
    </>
  )
}

export default InvalidURL
