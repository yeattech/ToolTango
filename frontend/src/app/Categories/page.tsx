import SideMenu from "@/components/sidemenu";
import CategoriesTable from "@/components/Table/categoriesTable";

export default function Equipments() {
	return (
		<div className="flex h-screen">
			<SideMenu />
			<div className="flex-1 overflow-y-auto px-10 py-10">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-3xl">Categories</h2>
				</div>
				<CategoriesTable />
			</div>
		</div>
	);
}