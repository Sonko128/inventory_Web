import Layout from "../../Layout";

function Profile(){
    return(
        <Layout children={<Prof/>}/>
    )
}
export default Profile;

function Prof(){
    return(
        <h1>Profile Information</h1>
    )
}