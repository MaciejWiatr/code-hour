class CreateTweetService {
	public static generateTweet(
		message: string,
		day: number,
		challenge: string
	) {
		return `
        Day ${day} of #${challenge}!\nToday's progress:\n${message}
        `;
	}
}

export default CreateTweetService;
