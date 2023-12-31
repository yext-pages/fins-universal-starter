export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface Fins_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Fins_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export default interface Ce_service {
	landingPageUrl?: string,
	description?: string,
	name: string,
	fins_primaryCTA?: Fins_primaryCTA,
	fins_relatedFaqs?: EntityReference[],
	fins_relatedLocations?: EntityReference[],
	fins_relatedProfessionals?: EntityReference[],
	fins_secondaryCTA?: Fins_secondaryCTA,
	fins_serviceCategory?: string,
	fins_servicesImage?: Image,
	keywords?: string[],
	id: string,
}
