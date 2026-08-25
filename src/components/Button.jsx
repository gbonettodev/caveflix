function Button({ children, variant = 'primary', type = 'button', icon: Icon, ...props }) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <button className={className} type={type} {...props}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </button>
  )
}

export default Button
