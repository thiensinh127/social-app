import { useEffect } from 'react'

type Ref<T> = { current: T | null }

export function useClickOutside<T extends HTMLElement>(
    ref: Ref<T>,
    handler: (event: MouseEvent | TouchEvent) => void,
    childrenRef?: Ref<T>,
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const dropdownId = 'dropdown-container'
            const dropdownElement = document.getElementById(dropdownId)

            const calendarElements = document.querySelectorAll('.calendar')
            let isOutside = false
            calendarElements.forEach((el) => {
                if (el && el.contains(event.target as Node)) isOutside = true
            })
            if (isOutside) return
            if (!ref.current || ref.current.contains(event.target as Node)) return
            if (dropdownElement && dropdownElement.contains(event.target as Node))
                return
            if (childrenRef && childrenRef.current?.contains(event.target as Node))
                return
            handler(event)
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}
