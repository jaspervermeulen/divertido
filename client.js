import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'iehp9qeu', // you can find this in sanity.json
  dataset: 'divertido', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})