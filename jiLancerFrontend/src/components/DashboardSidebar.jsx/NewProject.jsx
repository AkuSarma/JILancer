import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Sidebar from '../Dashboard/sidebar'

function ProjectOfList() {
  const projects = [
 
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  
      {
        title: "Project 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Project 3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
     
      {
        title: "Project 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Project 3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Project 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Project 3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    
        {
          title: "Project 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Project 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
       
        {
          title: "Project 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Project 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 mt-5">Projects</h1>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white shadow-md rounded-2xl my-5">
            <CardBody className="flex flex-col space-y-10 items-center justify-center p-5">
              <CardTitle className="text-xl font-bold ">
                {project.title}
              </CardTitle>
              <CardText className="">{project.description}</CardText>
              <div
              className="flex items-center justify-center ">
              <Button color="primary" className=" bg-secondaryColor px-5 py-2 border- rounded-xl bottom-1">
                Apply
              </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}

export default ProjectOfList;
