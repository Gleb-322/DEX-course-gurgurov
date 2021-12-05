import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps

const ProjectCardProps = ({ onClick, project }: IProjectCardProps) => {
  const { id, important, text } = project;
  let clazz = important ? "btn btn_important" : "btn";
  return (
    <button className={clazz} onClick={() => onClick(id)}>
      {text}
    </button>
  );
};

export { ProjectCardProps };
