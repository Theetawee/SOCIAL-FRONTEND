
const Heading = ({label}:{label:string}) => {
  return (
      <div className="text-center">
          <h2 className="text-2xl">{label}</h2>
          <hr className="h-px my-4 border-gray-200" />
    </div>
  )
}

export default Heading
