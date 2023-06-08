export enum C_activeOnAnswers {
	YES = "Yes",
	NO = "No",
}

export default interface HelpArticle {
	body?: string,
	externalArticlePostDate?: string,
	externalArticleUpdateDate?: string,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	promoted?: boolean,
	shortDescription?: string,
	slug?: string,
	voteCount?: number,
	voteSum?: number,
	name: string,
	c_activeOnAnswers?: C_activeOnAnswers,
	c_helpArticleCategory?: string[],
	keywords?: string[],
	id: string,
	timezone?: any,
}
