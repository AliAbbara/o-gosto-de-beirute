import { Link } from 'react-router-dom'
import ContainerCard from '../cards/ContainerCard'

function MobileNav() {
  const menuItems = [
    { id: '2h8v6b5', title: 'INÍCIO', path: '' },
    { id: '098asd7a0', title: 'CARDÁPIO', path: 'menu/sandwiches' },
    { id: '00gjkbnf5', title: 'CONTATO', path: 'contact' },
    { id: '65yuer23t', title: 'SOBRE', path: 'about-us' },
  ]
  return (
    <ContainerCard className='fixed z-30 -bottom-5 -left-2 -right-2 flex sm:hidden justify-evenly items-center'>
      <ul className='flex'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className='rounded-lg hover:bg-red-600 duration-100'>
            <Link className='px-3' to={'/' + item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </ContainerCard>
  )
}

export default MobileNav
