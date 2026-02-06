import EditNav from "./components/EditProfilePage/EditNav";
import Profile from "./components/EditProfilePage/Profile";
import EditFooter from "./components/EditProfilePage/EditFooter";

function EditProfile() {
    return (
        <>
            <div>
                <EditNav />

                <main className="container">
                    <Profile />
                </main>

                <EditFooter />
            </div>
        </>
    )
}

export default EditProfile;