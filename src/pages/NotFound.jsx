import ContainerCard from '../components/cards/ContainerCard'
import RedLink from '../components/links/RedLink'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <ContainerCard className='flex flex-col'>
      <h3 className='text-2xl mb-2'>Ooops, this page was not found.</h3>
      <RedLink className='w-fit flex items-center' to='/'>
        <FaHome className='mr-2' />
        Back to the home page
      </RedLink>
    </ContainerCard>
  )
}

export default NotFound
