import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export function TransactionTable() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2023-06-01",
      amount: 50.99,
      category: "Groceries",
      description: "Weekly grocery shopping",
    },
    {
      id: 2,
      date: "2023-06-05",
      amount: 25.0,
      category: "Dining",
      description: "Dinner at local restaurant",
    },
    {
      id: 3,
      date: "2023-06-10",
      amount: 75.25,
      category: "Shopping",
      description: "New shirt and pants",
    },
    {
      id: 4,
      date: "2023-06-15",
      amount: 15.5,
      category: "Utilities",
      description: "Electric bill",
    },
    {
      id: 5,
      date: "2023-06-20",
      amount: 100.0,
      category: "Rent",
      description: "Monthly rent payment",
    },
    {
      id: 6,
      date: "2023-06-25",
      amount: 30.75,
      category: "Groceries",
      description: "Midweek grocery run",
    },
  ])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }
  const handleTransactionEdit = (id, newDescription) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.map((transaction) => {
        if (transaction.id === id) {
          return { ...transaction, description: newDescription }
        }
        return transaction
      });
    })
  }
  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((transaction) => transaction.category === selectedCategory)
  return (
    (<div className="container mt-12 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Transaction History</h1>
      <div className="flex justify-between items-center mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <FilterIcon className="w-4 h-4 dark:text-white" />
              <span className="dark:text-white">Filter by Category</span>
              <ChevronDownIcon className="w-4 h-4 dark:text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "All"}
              onCheckedChange={() => handleCategoryChange("All")}>
              All
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "Groceries"}
              onCheckedChange={() => handleCategoryChange("Groceries")}>
              Groceries
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "Dining"}
              onCheckedChange={() => handleCategoryChange("Dining")}>
              Dining
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "Shopping"}
              onCheckedChange={() => handleCategoryChange("Shopping")}>
              Shopping
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "Utilities"}
              onCheckedChange={() => handleCategoryChange("Utilities")}>
              Utilities
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === "Rent"}
              onCheckedChange={() => handleCategoryChange("Rent")}>
              Rent
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className='dark:text-white'>{transaction.date}</TableCell>
                <TableCell className='dark:text-white'>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2 dark:text-white">
                        {transaction.category}
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 ">
                      <DropdownMenuLabel className='dark:text-white'>Change Category</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={transaction.category === "Groceries"}
                        onCheckedChange={() => handleTransactionEdit(transaction.id, "Groceries")}>
                        Groceries
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={transaction.category === "Dining"}
                        onCheckedChange={() => handleTransactionEdit(transaction.id, "Dining")}>
                        Dining
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={transaction.category === "Shopping"}
                        onCheckedChange={() => handleTransactionEdit(transaction.id, "Shopping")}>
                        Shopping
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={transaction.category === "Utilities"}
                        onCheckedChange={() => handleTransactionEdit(transaction.id, "Utilities")}>
                        Utilities
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={transaction.category === "Rent"}
                        onCheckedChange={() => handleTransactionEdit(transaction.id, "Rent")}>
                        Rent
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell className='dark:text-white'>{transaction.description}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <FilePenIcon className="w-4 h-4 dark:text-white" />
                        <span className="sr-only">Edit transaction description</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Edit Transaction Description</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Input
                        type="text"
                        defaultValue={transaction.description}
                        onBlur={(e) => handleTransactionEdit(transaction.id, e.target.value)} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>)
  );
}

function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function FilePenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>)
  );
}


function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}