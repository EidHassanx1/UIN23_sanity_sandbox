import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'h63aavy9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})