import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ChevronDown,
  ChevronDownCircleIcon,
  ListFilterIcon,
  MoreHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { addDays, parseISO } from 'date-fns';
import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

const initialData = [
  {
    id: 1,
    date: '2023-06-01',
    amount: 50.99,
    category: 'Groceries',
    description: 'Weekly grocery shopping',
  },
  {
    id: 2,
    date: '2023-06-05',
    amount: 25.0,
    category: 'Dining',
    description: 'Dinner at local restaurant',
  },
  {
    id: 3,
    date: '2023-06-10',
    amount: 75.25,
    category: 'Shopping',
    description: 'New shirt and pants',
  },
  {
    id: 4,
    date: '2023-06-15',
    amount: 15.5,
    category: 'Utilities',
    description: 'Electric bill',
  },
  {
    id: 5,
    date: '2023-06-20',
    amount: 100.0,
    category: 'Rent',
    description: 'Monthly rent payment',
  },
  {
    id: 6,
    date: '2023-06-25',
    amount: 30.75,
    category: 'Groceries',
    description: 'Midweek grocery run',
  },
];

const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className='text-left font-medium'>{formatted}</div>;
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      const [selectedCategory, setSelectedCategory] = useState(
        row.getValue('category')
      );
      const categories = [
        'Groceries',
        'Dining',
        'Shopping',
        'Utilities',
        'Rent',
      ];

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        row.original.category = category;
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='capitalize'>
              {selectedCategory} <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row, table }) => {
      const [isEditing, setIsEditing] = useState(false);
      const [newDescription, setNewDescription] = useState(
        row.getValue('description')
      );

      const handleEditDescription = () => {
        setIsEditing(true);
      };

      const handleSaveDescription = () => {
        setIsEditing(false);
        const updatedData = table.options.data.map((item) =>
          item.id === row.original.id
            ? { ...item, description: newDescription }
            : item
        );
        table.options.setData(updatedData);
      };

      return (
        <>
          <div className='lowercase' onClick={handleEditDescription}>
            {row.getValue('description')}
          </div>
          {isEditing && (
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='dark:text-white'>
                    Edit Description
                  </DialogTitle>
                </DialogHeader>
                <Input
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className='mb-4 dark:text-white'
                />
                <DialogFooter>
                  <Button onClick={handleSaveDescription}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row, table }) => {
      const transaction = row.original;

      const [isEditing, setIsEditing] = useState(false);
      const [newDescription, setNewDescription] = useState(
        row.getValue('description')
      );

      const handleEditDescription = () => {
        setIsEditing(true);
      };

      const handleSaveDescription = () => {
        setIsEditing(false);
        const updatedData = table.options.data.map((item) =>
          item.id === row.original.id
            ? { ...item, description: newDescription }
            : item
        );
        table.options.setData(updatedData);
      };

      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(transaction.id)}
              >
                Copy transaction ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleEditDescription}>
                Edit Description
              </DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isEditing && (
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='dark:text-white'>
                    Edit Description
                  </DialogTitle>
                </DialogHeader>
                <Input
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className='mb-4 dark:text-white'
                />
                <DialogFooter>
                  <Button onClick={handleSaveDescription}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      );
    },
  },
];

export function TransactionTable() {
  const [data, setData] = useState(initialData);
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editDescription, setEditDescription] = useState('');

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    setData,
  });

  const handleFilterByDateRange = (range) => {
    setDateRange(range);

    const filteredData = initialData.filter((transaction) => {
      const transactionDate = parseISO(transaction.date);
      const fromDate = range.from ? addDays(range.from, -1) : null;
      const toDate = range.to ? addDays(range.to, 1) : null;

      return (
        (!fromDate || transactionDate > fromDate) &&
        (!toDate || transactionDate < toDate)
      );
    });

    setData(filteredData.length ? filteredData : []);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setColumnFilters((prevFilters) => {
      if (category === 'All') {
        return prevFilters.filter((filter) => filter.id !== 'category');
      } else {
        return [...prevFilters, { id: 'category', value: category }];
      }
    });
  };

  const handleSaveDescription = () => {
    setIsDialogOpen(false);
    const updatedData = data.map((item) =>
      item.id === editingRowId
        ? { ...item, description: editDescription }
        : item
    );
    setData(updatedData);
    setEditingRowId(null);
  };

  const handleExportCSV = () => {
    const csvRows = [];
    const headers = columns
      .filter((column) => column.accessorKey)
      .map((column) => column.header);
    csvRows.push(headers.join(','));

    data.forEach((row) => {
      const values = columns
        .filter((column) => column.accessorKey)
        .map((column) => row[column.accessorKey]);
      csvRows.push(values.join(','));
    });

    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'transactions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-full container'>
    <div className='text-2xl font-semibold mt-5 dark:text-white'>
  Transactions
</div>
<p className='text-muted-foreground dark:text-white/50'>
  Monitor and manage your recurring expenses efficiently.
</p>

      <div className='flex flex-col lg:flex-row items-center py-4'>
        <Input
          placeholder='Filter descriptions...'
          value={table.getColumn('description')?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn('description')?.setFilterValue(event.target.value)
          }
          className='max-w-72 dark:text-white dark:bg-black mb-2 lg:mb-0'
        />
        <div
          className={cn(
            'flex flex-col lg:flex-row justify-between w-full gap-2'
          )}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className='ml-2 h-8 px-2 lg:px-3 dark:text-white'
              >
                <CalendarIcon className='mr-2 h-4 w-4 dark:text-white' />
                Pick a date
                <ChevronDown className='ml-auto h-4 w-4 dark:text-white' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0 dark:bg-gray-800'>
              <Calendar
                initialFocus
                mode='range'
                selected={dateRange}
                onSelect={handleFilterByDateRange}
                numberOfMonths={2}
                className='dark:text-white'
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 mt-2 lg:mt-0'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='ml-auto dark:text-white'>
                Columns <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className='capitalize'
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={handleExportCSV} className=' dark:text-black'>
            Export
          </Button>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center mb-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='flex items-center gap-2'>
              <ListFilterIcon className='w-4 h-4 dark:text-white' />
              <span className='dark:text-white'>Filter by Category</span>
              <ChevronDownCircleIcon className='w-4 h-4 dark:text-white' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-48'>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'All'}
              onCheckedChange={() => handleCategoryChange('All')}
            >
              All
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'Groceries'}
              onCheckedChange={() => handleCategoryChange('Groceries')}
            >
              Groceries
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'Dining'}
              onCheckedChange={() => handleCategoryChange('Dining')}
            >
              Dining
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'Shopping'}
              onCheckedChange={() => handleCategoryChange('Shopping')}
            >
              Shopping
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'Utilities'}
              onCheckedChange={() => handleCategoryChange('Utilities')}
            >
              Utilities
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedCategory === 'Rent'}
              onCheckedChange={() => handleCategoryChange('Rent')}
            >
              Rent
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='rounded-md border overflow-x-auto'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='dark:text-white'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center dark:text-white'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground dark:text-white mb-2 lg:mb-0'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='dark:text-white'
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='dark:text-white'
          >
            Next
          </Button>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='dark:text-white'>
              Edit Description
            </DialogTitle>
          </DialogHeader>
          <Input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className='mb-4'
          />
          <DialogFooter>
            <Button onClick={handleSaveDescription}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
