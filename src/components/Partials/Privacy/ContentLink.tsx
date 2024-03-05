
const ContentLink = ({label,path}:{label:string,path:string}) => {
  return (
      <li className="mb-6 text-primary-600">
          <a href={`#${path}`}>{label}</a>
    </li>
  )
}

export default ContentLink
