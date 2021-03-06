interface ITweet {
	created_at: string;
	id: number;
	id_str: string;
	text: string;
	truncated: boolean;
	entities: Entities;
	source: string;
	in_reply_to_status_id?: any;
	in_reply_to_status_id_str?: any;
	in_reply_to_user_id?: any;
	in_reply_to_user_id_str?: any;
	in_reply_to_screen_name?: any;
	user: User;
	geo?: any;
	coordinates?: any;
	place?: any;
	contributors?: any;
	retweeted_status: IRetweet;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	favorited: boolean;
	retweeted: boolean;
	lang: string;
}

interface IRetweet {
	created_at: string;
	id: number;
	id_str: string;
	text: string;
	truncated: boolean;
	entities: Entities3;
	source: string;
	in_reply_to_status_id?: any;
	in_reply_to_status_id_str?: any;
	in_reply_to_user_id?: any;
	in_reply_to_user_id_str?: any;
	in_reply_to_screen_name?: any;
	user: User2;
	geo?: any;
	coordinates?: any;
	place?: any;
	contributors?: any;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	favorited: boolean;
	retweeted: boolean;
	possibly_sensitive: boolean;
	lang: string;
}

interface User2 {
	id: number;
	id_str: string;
	name: string;
	screen_name: string;
	location: string;
	description: string;
	url: string;
	entities: Entities4;
	protected: boolean;
	followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	utc_offset?: any;
	time_zone?: any;
	geo_enabled: boolean;
	verified: boolean;
	statuses_count: number;
	lang?: any;
	contributors_enabled: boolean;
	is_translator: boolean;
	is_translation_enabled: boolean;
	profile_background_color: string;
	profile_background_image_url: string;
	profile_background_image_url_https: string;
	profile_background_tile: boolean;
	profile_image_url: string;
	profile_image_url_https: string;
	profile_banner_url: string;
	profile_link_color: string;
	profile_sidebar_border_color: string;
	profile_sidebar_fill_color: string;
	profile_text_color: string;
	profile_use_background_image: boolean;
	has_extended_profile: boolean;
	default_profile: boolean;
	default_profile_image: boolean;
	following: boolean;
	follow_request_sent: boolean;
	notifications: boolean;
	translator_type: string;
}

interface Entities4 {
	url: Url2;
	description: Description;
}

interface Url2 {
	urls: Url[];
}

interface Entities3 {
	hashtags: any[];
	symbols: any[];
	user_mentions: any[];
	urls: Url[];
}

interface Url {
	url: string;
	expanded_url: string;
	display_url: string;
	indices: number[];
}

interface User {
	id: number;
	id_str: string;
	name: string;
	screen_name: string;
	location: string;
	description: string;
	url?: any;
	entities: Entities2;
	protected: boolean;
	followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	utc_offset?: any;
	time_zone?: any;
	geo_enabled: boolean;
	verified: boolean;
	statuses_count: number;
	lang?: any;
	contributors_enabled: boolean;
	is_translator: boolean;
	is_translation_enabled: boolean;
	profile_background_color: string;
	profile_background_image_url?: any;
	profile_background_image_url_https?: any;
	profile_background_tile: boolean;
	profile_image_url: string;
	profile_image_url_https: string;
	profile_banner_url: string;
	profile_link_color: string;
	profile_sidebar_border_color: string;
	profile_sidebar_fill_color: string;
	profile_text_color: string;
	profile_use_background_image: boolean;
	has_extended_profile: boolean;
	default_profile: boolean;
	default_profile_image: boolean;
	following: boolean;
	follow_request_sent: boolean;
	notifications: boolean;
	translator_type: string;
}

interface Entities2 {
	description: Description;
}

interface Description {
	urls: any[];
}

interface Entities {
	hashtags: any[];
	symbols: any[];
	user_mentions: Usermention[];
	urls: any[];
}

interface Usermention {
	screen_name: string;
	name: string;
	id: number;
	id_str: string;
	indices: number[];
}

interface ITweetHistoryElement {
	text: string;
	link: string;
}

interface IChartDataEntry {
	date: string;
	total: number;
}

interface IChartData {
	likes: IChartDataEntry[];
	shares: IChartDataEntry[];
}

interface ISavefileData {
	chartData: IChartData;
	day: number;
	username: string;
	twitterUsername: string;
	challengeName: string;
	lastVisited: string;
}

interface IAction {
	payload?: any;
	type: string;
}

interface IContextValue {
	state: ISavefileData;
	dispatch: React.Dispatch<IAction>;
}

type textAreaType = "Ok" | "Warning" | "Error";

export type {
	ITweet,
	ITweetHistoryElement,
	ISavefileData,
	IAction,
	IContextValue,
	textAreaType,
};
