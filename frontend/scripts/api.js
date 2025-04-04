const sanityClient = require('@sanity/client');
const fs = require('fs');

const client = sanityClient.createClient({
    projectId: 'jnluy9nd',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-10-24',
});

const getSiteData = async () => {
    const query = `
        *[_type == "siteSettings"][0] {
            ...
        }
    `;

    try {
        const data = await client.fetch(query);
        const path = 'json';
        const file = 'siteSettings.json';
        const jsonData = JSON.stringify(data);

        fs.writeFile(`${path}/${file}`, jsonData, 'utf8', () => {
            console.log(`Wrote ${file} file.`);
        });

        return data;
    } catch (error) {
        console.error('Error fetching site data:', error);
        return [];
    }
};

const getTalentData = async () => {
    const query = `
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

    try {
        const data = await client.fetch(query);
        const path = 'json';
        const file = 'talentData.json';
        const jsonData = JSON.stringify(data);

        fs.writeFile(`${path}/${file}`, jsonData, 'utf8', () => {
            console.log(`Wrote ${file} file.`);
        });

        return data;
    } catch (error) {
        console.error('Error fetching site data:', error);
        return [];
    }
};

module.exports = {
    getSiteData,
    getTalentData,
};
