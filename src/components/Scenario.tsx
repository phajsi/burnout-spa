import React from "react";
import { useDrag } from "react-dnd";
import girlCoding from "../assets/illustration/girlCoding.png";

type Props = {
  id: number;
  name: string;
};

const Scenario = ({ id, name }: Props) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "pet",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <>
      <img src={girlCoding} alt="girl coding" />
      <div className="my-4">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit
        </p>
      </div>
      <div className="pet-card" ref={dragRef}>
        {name}
        {isDragging && "😱"}
      </div>
    </>
  );
};

export default Scenario;
