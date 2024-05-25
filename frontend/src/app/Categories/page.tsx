import SideMenu from "@/components/sidemenu";

export default function Categories() {
	return (
		<div className="flex h-screen">
			<SideMenu />
			<div className="flex-1 p-4">
                <h2>Categories</h2>
			</div>
		</div>
	);
}