// As it's required to specify the API Version this custom hook ensures it's all using the same version
import {useClient as useSanityClient} from 'sanity'

export const SANITY_API_VERSION = '2022-09-14'

export function useClient() {
  return useSanityClient({apiVersion: SANITY_API_VERSION})
}
