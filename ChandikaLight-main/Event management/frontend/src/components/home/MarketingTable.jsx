import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { Table } from "flowbite-react";

const MarketingTable = ({ marketings }) => {
  const dateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Started Date</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Total Bill</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
          <Table.HeadCell>Operations</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {marketings.map((marketing, index) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={marketing._id}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{new Date(marketing.expenseDate).toLocaleDateString('en-GB', dateFormatOptions)}</Table.Cell>
              <Table.Cell>{marketing.expenseCategory}</Table.Cell>
              <Table.Cell>{marketing.expenseDescription}</Table.Cell>
              <Table.Cell>{marketing.expenseAmount}</Table.Cell>
              <Table.Cell>{new Date(marketing.expenseDuedate).toLocaleDateString('en-GB', dateFormatOptions)}</Table.Cell>
              <Table.Cell>
                <div className="flex justify-center">
                  <Link
                    to={`/admin/service/dashboard/marketing/delete/${marketing._id}`}
                  >
                    <MdOutlineDelete className="text-red-500" />
                  </Link>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MarketingTable;
