export default function TextArea({
  rows,
  cols,
  placeholder,
  onChange,
  value,
  classNames,
}) {
  return (
    <textarea
      className={`textarea textarea-bordered textarea-accent text-base bg-base-100 rounded-2xl pt-4 transition-all focus:outline-transparent border-opacity-45 ${classNames}`}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      style={{ resize: "none" }}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}
