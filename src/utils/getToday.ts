import dayjs from "dayjs";
const getToday = () => {
	return dayjs().format("DD/MM/YYYY");
};

export default getToday;
