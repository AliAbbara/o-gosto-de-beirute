function PicsCard({ className }) {
  return (
    <div
      className={
        className +
        ' flex h-60 w-80 transition ease-in-out delay-50 -translate-y-5 hover:scale-110 duration-300 rounded-lg bg-red-700'
      }>
      <div className='flex w-1/2'>
        <img
          className='rounded-lg'
          src='https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FPastelzinhoDeQueijo.jpg?alt=media&token=6a9c845a-3128-4601-9113-0f8d179f43b0'
          alt=''
        />
      </div>
      <div className='flex flex-col w-1/2'>
        <img
          className='h-1/2 rounded-lg'
          src='https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FBatataFrita.jpg?alt=media&token=e456a551-ec2e-41dc-9141-93f7f9600f3f'
          alt=''
        />
        <img
          className='h-1/2 rounded-lg'
          src='https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FQuibedeCarne.jpg?alt=media&token=0004b6cf-9b60-4c91-b82d-99b387ea6b02'
          alt=''
        />
      </div>
    </div>
  )
}

export default PicsCard
