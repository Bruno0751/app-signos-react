export default function Button(props) {
  return (
    <button
      className="btn btn-primary"
      type="button"
      id={props.id}
      name={props.name}
      onClick={props.click}
    >
        {props.text}
    </button>
  );
}
