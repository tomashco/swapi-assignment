import GenericCard from "../components/GenericCard"
import Title from "../components/Title"
import { PageProps } from "../utilities/interfaces/common"

export default function SingleViewPage({pageTitle}: PageProps) {

  return (
    <>
      <Title title={pageTitle}/>
      <span className='m-6'/>
    <GenericCard apiUrl={window.location.pathname}/>
    </>
  )
}
