import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным
const ProjectsList = ({ projects, onClick }: IProjectsListProps) => {
  const items = projects.map((item) => {
    return (
      <ProjectCardProps
        key={item.id}
        id={item.id}
        project={item}
        onClick={onClick}
      />
    );
  });
  return <div>{items}</div>;
};

export { ProjectsList };
