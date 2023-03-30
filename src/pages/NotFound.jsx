import ContainerCard from '../components/cards/ContainerCard'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <ContainerCard className='flex flex-col'>
      <h3 className='text-2xl mb-2'>Ooops, this page was not found.</h3>
      <Link
        className='flex items-center hover:bg-red-600 rounded-lg duration-100 p-2 w-fit'
        to='/'>
        <FaHome className='mr-2' />
        Back to the home page
      </Link>
    </ContainerCard>
  )
}

export default NotFound
