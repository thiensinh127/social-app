import { IconProps } from "@/utils/interface"

const IconSetting = (props: IconProps) => {
  const { width = 16, color, className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      color={color}
      className={className}
      viewBox="0 0 128 512"
    >
      <path
        fill={color}
        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
      />
    </svg>
  )
}

export default IconSetting
