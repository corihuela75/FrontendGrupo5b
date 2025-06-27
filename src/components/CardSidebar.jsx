import { List, ListItem, ListItemPrefix, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import members from "./../data/members.json";

export function CardSidebar({ close }) {
  const data = members.map((m) => {
    return { id: m.id, name: m.name };
  });
  return (
    <Card
      color="transparent"
      shadow={true}
      className="h-screen w-80 overflow-y-auto overflow-x-hidden min-w-fit px-4 shadow-xl shadow-blue-gray-900/5"
    >
      <div className="mb-1 flex items-center p-2">
        <img src="/images/logo1.png" alt="brand" className="w-56 m-auto" />
      </div>
      <List>
        <Link to="/home">
          <ListItem onClick={() => close()} className="font-bold text-lg">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

        <Link to="/presentation">
          <ListItem onClick={() => close()} className="font-bold text-lg">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                <path
                  fillRule="evenodd"
                  d="M12 14a7 7 0 0 0-7 7v1h14v-1a7 7 0 0 0-7-7z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Presentación
          </ListItem>
        </Link>

        {data.map((member) => (
          <Link to={`/presentation/${member.id}`}>
            <ListItem onClick={() => close()} className="pl-10 font-semibold">
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
              </ListItemPrefix>
              {member.name.split(" ")[0]}
            </ListItem>
          </Link>
        ))}

        <hr className="my-2 border-blue-gray-50" />

        <Link to="/roadmap">
          <ListItem onClick={() => close()} className="font-bold text-lg">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
              </svg>
            </ListItemPrefix>
            Roadmap
          </ListItem>
        </Link>

        <Link to="/api">
          <ListItem onClick={() => close()} className="font-bold text-lg">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Application API
          </ListItem>
        </Link>

        <Link to="/bitacora">
          <ListItem onClick={() => close()} className="font-bold text-lg">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.75A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6ZM5.25 6A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 .75.75v10.5H5.25V6ZM5.25 18v-.75h13.5v.75a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Bitácora
          </ListItem>
        </Link>

      </List>
    </Card>
  );
}
