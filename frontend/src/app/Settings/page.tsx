import SideMenu from "@/components/sidemenu";

export default function Settings() {
	return (
		<div className="flex h-screen">
			<SideMenu />
			<div className="flex-1 p-4 overflow-y-auto">
                <h2>Settings</h2>
			</div>
		</div>
	);
}
