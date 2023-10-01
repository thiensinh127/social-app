import { IconProps } from "@/utils/interface"

const IconCirclePlus = (props: IconProps) => {
  const { width = 16, color, className } = props
  return (
    <svg
      width={width}
      height={width}
      color={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
      />
    </svg>
  )
}

export default IconCirclePlus
