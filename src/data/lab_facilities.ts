import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";
import team_avatar_5 from "@/assets/img/teamsimg5.jpg";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_8 from "@/assets/img/team/practical_training.jpg";


import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	title: string;
}

const lab_facilities: DataType[] = [
	{
		id: 1,
		img: team_avatar_1,
		title: "Practical Training",
	},
	{
		id: 2,
		img: team_avatar_2,
		title: "Advanced Equipment",
	},
	{
		id: 3,
		img: team_avatar_3,
		title: "Research & Project Support",
	},
	{
		id: 4,
		img: team_avatar_4,
		title: "Workshop Areas",
	},
	// // team data
	{
		id: 5,
		img: team_avatar_5,
		title: "Simulation Labs",
	},
	{
		id: 6,
		img: team_avatar_6,
		title: "Technical Support",
	},
];

export default lab_facilities;
