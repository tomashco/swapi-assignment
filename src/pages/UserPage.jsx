import UserCard from "../components/UserCard"

function UserPage() {

  return (
    <>
    <h1>User Page</h1>
    <UserCard pathName={window.location.pathname}/>
    </>
  )
}

export default UserPage
