type Props = {
  relates: string;
  link: string;
  title: string;
  author: string;
  year: string;
};

const ModalSesction = (props: Props) => {
  return (
    <p className="text-base leading-relaxed text-cyan-100">
      <b>{props.relates}</b>
      <br />
      <a href={props.link} target="_blank" className="underline text-red-500">
        {" "}
        "{props.title}"
      </a>{" "}
      by {props.author} ({props.year})
    </p>
  );
};

export default ModalSesction;
