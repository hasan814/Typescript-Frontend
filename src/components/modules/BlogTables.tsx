import { v4 as uuidv4 } from "uuid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BlogTables = () => {
  const invoices = [
    { id: 1, name: "Paid", email: "h.mousavi910@gmail.com" },
    { id: 2, name: "Pending", email: "example@gmail.com" },
  ];

  return (
    <Table className="w-full border border-gray-200 shadow-sm rounded-lg">
      <TableCaption className="text-gray-600">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-20 text-left">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Edit</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={uuidv4()} className="hover:bg-gray-50 transition">
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell className="text-right text-blue-600 cursor-pointer hover:underline">
              Edit
            </TableCell>
            <TableCell className="text-right text-red-600 cursor-pointer hover:underline">
              Delete
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogTables;
