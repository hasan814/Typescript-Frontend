import { IBlogPost } from "@/types";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ title, img, content }: IBlogPost) => {
  return (
    <Card className="w-full md:w-[350px] shadow-lg transition hover:shadow-xl rounded-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{content}</p>
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
