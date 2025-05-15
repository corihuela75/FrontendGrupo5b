import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
export function ProfileCard({user}) {
  return (
    <Card className="w-2/5">
      <CardHeader floated={false} className="h-fit">
        <img src={user.url_image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {user.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {user.profession}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-evenly my-2">
          {user.social_media.github && (<Typography
            as="a"
            href={user.social_media.github}
            target="_blank"
            variant="lead"
            color="black"
            className="scale-150"
          >
            <i className="fab fa-github" />
          </Typography>)}
          {(user.social_media.linkedin && <Typography
            as="a"
            href={user.social_media.linkedin}
            variant="lead"
            target="_blank"
            color="blue"
            className="scale-150"
          >
            <i className="fab fa-linkedin" />
          </Typography>)}
         {(user.social_media.instagram && <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            className="scale-150"
          >
            <i className="fab fa-instagram" />
          </Typography>)}
      </CardFooter>
    </Card>
  );
}