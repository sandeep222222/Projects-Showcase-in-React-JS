import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {imageUrl, name} = details

  return (
    <li className="app-li">
      <img src={imageUrl} className="pic" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectShowCase
