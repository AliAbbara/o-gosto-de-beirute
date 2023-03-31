function ContainerCard({ children, className }) {
  return (
    <div
      className={
        'p-4 mb-4 bg-red-700 border-2 border-yellow-400 rounded-lg shadow-2xl shadow-black text-white text-lg ' +
        className
      }>
      {children}
    </div>
  )
}

export default ContainerCard
