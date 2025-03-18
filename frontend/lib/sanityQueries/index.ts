export const mediaString = `
	...,
	mediaType,
	image {
		asset-> {
			url,
			metadata {
				lqip
			}
		},
		alt
	},
	video {
		asset-> {
			playbackId,
		},
	},
`;

export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
		heroTitle[]{
			...
		},
		heroMedia {
			media {
				${mediaString}
			}
		},
		portfolioTitle[]{
			...
		},
		partnersTitle,
		partnersLogos[]{
			logo {
				asset-> {
					url
				}
			},
			title,
			logoLink
		},
		featuredTalent[]-> {
			...,
			title,
			heroThumbnail {
				asset-> {
					url
				}
			}
		},
		aboutTitle[]{
			...
		},
		servicesList[]{
			title,
			listItems[]
		},
		gallery[]{
			image{
				asset->{
					url
				}
			},
			aspectRatio
		},
	}
`;

export const aboutPageQueryString = `
	*[_type == 'aboutPage'][0] {
		...,
		founderImage {
			asset-> {
				url
			}
		},
		heroSubTitle,
		heroTitle[]{
			...
		},
		heroDescription,
		servicesList[]{
			title,
			listItems[]
		},
		ourPeopleTitle[]{
			...
		},
		people[]{
			name,
			position,
			image {
				asset-> {
					url
				}
			}
		},
	}
`;

export const contactPageQueryString = `
	*[_type == 'contactPage'][0] {
		...,
	}
`;

export const portfolioPageQueryString = `
	*[_type == 'portfolioPage'][0] {
		...,
		heroTitle[]{
			...
		},
	}
`;

export const workPageQueryString = `
	*[_type == "workPage"] {
		...,
		seoTitle,
		seoDescription,
	}
`;

export const talentQueryString = `
	*[_type == 'talent'] | order(orderRank) [0...100] {
		...,
		title,
		slug,
		tags[],
		description,
		socialLinks[]{
			title,
			link
		},
		heroThumbnail{
			asset->{
				url
			}
		},
		heroGallery[]{
			title,
			image{
				asset->{
					url
				}
			}
		}
	}
`;
