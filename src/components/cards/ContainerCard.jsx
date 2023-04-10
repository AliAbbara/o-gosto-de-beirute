function ContainerCard({ children, className }) {
  return (
    <div
      className={
        'p-4 mb-4 text-lg text-white rounded-lg bg-red-700 border-2 border-yellow-300 shadow-2xl shadow-black ' +
        className
      }>
      {children}
    </div>
  )
}

export default ContainerCard
