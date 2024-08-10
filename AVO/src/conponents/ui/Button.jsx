
const Button = ({label, link, className}) => {
  className = `${className} tw-bg-primary tw-text-white tw-capitalize tw-rounded-md tw-py-2 tw-px-2 tw-cursor-pointer`
  if (className.includes("tw-text-black")) {
    className = className.replace("tw-text-white", "tw-text-black")
  }

  return (
    <a href={link} className={className}>{label}</a>
  )
}

export default Button
