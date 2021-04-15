import fs from "fs-extra";
import initialState from "../constants/initialState";
import { ISavefileData } from "../ts/interfaces";
import getToday from "../utils/getToday";

class SavefileService {
	public static readonly path: string = "./app.save";
	private static fileHandler = fs;

	public static init() {
		this.fileHandler
			.ensureFile(this.path)
			.then(() => {
				console.log("Ensured that save file exists");
				try {
					const data = this.getData();
					data.lastVisited = getToday();
					this.setData(data);
				} catch {
					const initState = initialState;
					initState.lastVisited = getToday();

					this.setData(initState as any);
				}
			})
			.catch(() => {
				console.log(
					"Error occurred while ensuring save file existence"
				);
			});
	}

	public static getData(): ISavefileData {
		return JSON.parse(this.fileHandler.readFileSync(this.path, "utf8"));
	}

	public static setData(data: ISavefileData): void {
		this.fileHandler.writeFileSync(this.path, JSON.stringify(data));
	}
}

export default SavefileService;
