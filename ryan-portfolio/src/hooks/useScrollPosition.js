import {useRef, useLayoutEffect} from 'react'

const getScrollPosition = () => {
  return window.scrollY
}

const useScrollPosition = (effect, dependencies, element) => {
  const position = useRef(getScrollPosition)
  
  let throttleTimeout = null
  
  const updatePos = () => {
    const currentPosition = getScrollPosition()
    effect({currentPosition})
    position.current = currentPosition
    throttleTimeout = null
  }
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout !== null) {
        clearTimeout(throttleTimeout)
      }
      throttleTimeout = setTimeout(updatePos, 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      throttleTimeout && clearTimeout(throttleTimeout)
    }
  })
}

export default useScrollPosition