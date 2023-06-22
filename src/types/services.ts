export interface EntityReference {
	entityId: string,
	name: string,
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
	c_associatedLocations?: EntityReference[],
	c_photo?: Image,
	c_serviceCategory?: string,
	keywords?: string[],
	id: string,
}
