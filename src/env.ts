import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	NOTION_API_KEY: { schema: (value) => value ?? '' },
	NOTION_DATABASE_ID: { schema: (value) => value ?? '' }
});
