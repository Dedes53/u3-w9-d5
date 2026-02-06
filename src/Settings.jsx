import SetNav from './components/SettingsPage/SetNav';
import MembershipSection from './components/SettingsPage/MembershipSection';
import PlanSection from './components/SettingsPage/PlanSection';
import SettingsSection from './components/SettingsPage/SettingsSection';
import ProfileSection from './components/SettingsPage/ProfileSection';

function Settings() {
    return (
        <div className="bg-light min-vh-100">
            <SetNav />

            <main className="container py-5">
                <h1 className="mb-5">Account</h1>

                <MembershipSection />
                <PlanSection />
                <SettingsSection />
                <ProfileSection />
            </main>
        </div>
    );
}

export default Settings;