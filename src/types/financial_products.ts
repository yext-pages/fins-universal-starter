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

export default interface Ce_financialProduct {
	landingPageUrl?: string,
	description?: string,
	name: string,
	c_photo?: Image,
	c_productCategory?: string[],
	keywords?: string[],
	id: string,
}
