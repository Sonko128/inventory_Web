import Layout from "../../Layout";

function User(){
    return(
        <Layout children={<AddUser/>}/>
    )
}
export default User;



function AddUser(){
    return(
        <div>
          <h1>
              All Users
          </h1>
        </div>
    )
}