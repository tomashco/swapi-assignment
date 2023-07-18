import UserCard from "../components/UserCard"

function UserPage(props) {

console.log(props)
  return (
    <>
    <h1>Look the props</h1>
    <UserCard pathName={window.location.pathname}/>
    </>
  )
}

export default UserPage
