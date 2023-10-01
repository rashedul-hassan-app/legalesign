import axios from "axios";

export const getTop50Albums = async () => {
	try {
		const response = await axios.get(
			"https://itunes.apple.com/us/rss/topalbums/limit=50/json"
		);
		return response.data.feed.entry;
	} catch (err) {
		console.log("Error while fetching ", err);
	}
};
