import { hideNotify, showNotify } from '@/stores/appSlice'
import { useAppDispatch } from '@/stores/configureStore'

export type NotificationType = 'success' | 'error' | 'info'

export interface INotifyOptions {
  message: string
  duration?: number
  type: NotificationType
}

const useNotify = () => {
  const dispatch = useAppDispatch()

  const show = (options: INotifyOptions) => {
    const { type = 'success', message = '', duration = 5000 } = options
    if (!message) return
    dispatch(showNotify({ message, type }))

    setTimeout(() => {
      hide()
    }, duration)
  }

  const hide = () => {
    dispatch(hideNotify())
  }

  return {
    show,
    hide,
  }
}

export default useNotify
