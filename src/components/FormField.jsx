function FormField({ label, name, value, onChange, error, placeholder, type = 'text', textarea = false }) {
  const Input = textarea ? 'textarea' : 'input'

  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-white" htmlFor={name}>
        {label}
      </label>
      <Input
        className="input-control"
        id={name}
        name={name}
        type={textarea ? undefined : type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? name + '-error' : undefined}
        rows={textarea ? 5 : undefined}
      />
      {error && <p className="form-error" id={name + '-error'}>{error}</p>}
    </div>
  )
}

export default FormField
