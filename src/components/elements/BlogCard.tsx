import { Button } from "@/components/ui/button";
import { IBlog } from "@/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ title, image, text, author }: IBlog) => {
  return (
    <Card className="w-full md:w-[350px] shadow-lg group transition duration-300 hover:shadow-xl rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{text}</p>
        <p className="text-gray-600 text-xs mt-2">by {author}</p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
