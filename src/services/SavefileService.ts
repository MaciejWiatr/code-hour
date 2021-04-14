import fs from "fs-extra";
import initialState from "../constants/initialState";
import { ISavefileData } from "../ts/interfaces";

class SavefileService {
	public static readonly path: string = "./app.save";
	private static fileHandler = fs;

	public static init() {
		this.fileHandler
			.ensureFile(this.path)
			.then(() => {
				console.log("Ensured that save file exists");
				try {
					console.log(this.getData().username);
				} catch {
					this.setData(initialState as any);
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
