import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	NOTION_API_KEY: {},
	NOTION_DATABASE_ID: {}
});