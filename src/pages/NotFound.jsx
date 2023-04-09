import { FaHome } from 'react-icons/fa'
import ContainerCard from '../components/cards/ContainerCard'
import RedLink from '../components/links/RedLink'

function NotFound() {
  return (
    <ContainerCard className='flex flex-col'>
      <h3 className='text-2xl mb-2'>Ops, esta página não foi encontrada.</h3>
      <RedLink className='w-fit flex items-center' to='/'>
        <FaHome className='mr-2' />
        Voltar a página inicial
      </RedLink>
    </ContainerCard>
  )
}

export default NotFound
