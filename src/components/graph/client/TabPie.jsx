import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const assetsData = [
  { name: 'Assets', value: 600 },
  { name: 'Liabilities', value: 300 },
  { name: 'Assets', value: 100 },
];

const spendingData = [
  { name: 'Spending', value: 200 },
  { name: 'Budget', value: 150 },
];

const COLORS = ['#242426', '#35d399', '#9999a3'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black text-white p-2 rounded-md">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export function TabPie() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-lg mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-2">
        <TabsTrigger value="account" className="text-[10px] xl:text-[14px]">
          Assets and Liabilities
        </TabsTrigger>
        <TabsTrigger value="password" className="text-[10px] xl:text-[14px]">
          Spending vs Budget
        </TabsTrigger>
      </TabsList>
      <Card className='dark:bg-black'>
        <TabsContent value="account">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={assetsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {assetsData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    stroke="#808080"
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="password">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {spendingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
      </Card>
    </Tabs>
  );
}

export default TabPie;
