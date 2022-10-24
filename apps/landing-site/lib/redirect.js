/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  const redirectTo = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    if (redirectTo.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + redirectTo)
  })

  return <></>
}

export const Redirect = () => {
  useRedirect()
  return <></>
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to)
  return <></>
}
