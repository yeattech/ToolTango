import Image from "next/image";
import SideMenu from "@/components/sidemenu";
import EquipmentTable from "@/components/Table/equipmentTable";

export default function Equipments() {
	return (
		<div className="flex h-screen">
			<SideMenu />
			<div className="flex-1 overflow-y-auto px-10 py-10">
				<h2>Equipments</h2>
				<EquipmentTable />
			</div>
		</div>
	);
}