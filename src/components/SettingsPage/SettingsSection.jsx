function SettingsSection() {
    return (
        <div className="border-bottom pb-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5 className="text-uppercase text-secondary">Settings</h5>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex flex-column gap-2">
                        <a href="#" className="text-primary text-decoration-none">Parental controls</a>
                        <a href="#" className="text-primary text-decoration-none">Test participation</a>
                        <a href="#" className="text-primary text-decoration-none">Manage download devices</a>
                        <a href="#" className="text-primary text-decoration-none">Activate a device</a>
                        <a href="#" className="text-primary text-decoration-none">Recent device streaming activity</a>
                        <a href="#" className="text-primary text-decoration-none">Sign out of all devices</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsSection;