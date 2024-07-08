import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", spending: 222, budget: 150 },
  { date: "2024-04-02", spending: 97, budget: 180 },
  { date: "2024-04-03", spending: 167, budget: 120 },
  { date: "2024-04-04", spending: 242, budget: 260 },
  { date: "2024-04-05", spending: 373, budget: 290 },
  { date: "2024-04-06", spending: 301, budget: 340 },
  { date: "2024-04-07", spending: 245, budget: 180 },
  { date: "2024-04-08", spending: 409, budget: 320 },
  { date: "2024-04-09", spending: 59, budget: 110 },
  { date: "2024-04-10", spending: 261, budget: 190 },
  { date: "2024-04-11", spending: 327, budget: 350 },
  { date: "2024-04-12", spending: 292, budget: 210 },
  { date: "2024-04-13", spending: 342, budget: 380 },
  { date: "2024-04-14", spending: 137, budget: 220 },
  { date: "2024-04-15", spending: 120, budget: 170 },
  { date: "2024-04-16", spending: 138, budget: 190 },
  { date: "2024-04-17", spending: 446, budget: 360 },
  { date: "2024-04-18", spending: 364, budget: 410 },
  { date: "2024-04-19", spending: 243, budget: 180 },
  { date: "2024-04-20", spending: 89, budget: 150 },
  { date: "2024-04-21", spending: 137, budget: 200 },
  { date: "2024-04-22", spending: 224, budget: 170 },
  { date: "2024-04-23", spending: 138, budget: 230 },
  { date: "2024-04-24", spending: 387, budget: 290 },
  { date: "2024-04-25", spending: 215, budget: 250 },
  { date: "2024-04-26", spending: 75, budget: 130 },
  { date: "2024-04-27", spending: 383, budget: 420 },
  { date: "2024-04-28", spending: 122, budget: 180 },
  { date: "2024-04-29", spending: 315, budget: 240 },
  { date: "2024-04-30", spending: 454, budget: 380 },
  { date: "2024-05-01", spending: 165, budget: 220 },
  { date: "2024-05-02", spending: 293, budget: 310 },
  { date: "2024-05-03", spending: 247, budget: 190 },
  { date: "2024-05-04", spending: 385, budget: 420 },
  { date: "2024-05-05", spending: 481, budget: 390 },
  { date: "2024-05-06", spending: 498, budget: 520 },
  { date: "2024-05-07", spending: 388, budget: 300 },
  { date: "2024-05-08", spending: 149, budget: 210 },
  { date: "2024-05-09", spending: 227, budget: 180 },
  { date: "2024-05-10", spending: 293, budget: 330 },
  { date: "2024-05-11", spending: 335, budget: 270 },
  { date: "2024-05-12", spending: 197, budget: 240 },
  { date: "2024-05-13", spending: 197, budget: 160 },
  { date: "2024-05-14", spending: 448, budget: 490 },
  { date: "2024-05-15", spending: 473, budget: 380 },
  { date: "2024-05-16", spending: 338, budget: 400 },
  { date: "2024-05-17", spending: 499, budget: 420 },
  { date: "2024-05-18", spending: 315, budget: 350 },
  { date: "2024-05-19", spending: 235, budget: 180 },
  { date: "2024-05-20", spending: 177, budget: 230 },
  { date: "2024-05-21", spending: 82, budget: 140 },
  { date: "2024-05-22", spending: 81, budget: 120 },
  { date: "2024-05-23", spending: 252, budget: 290 },
  { date: "2024-05-24", spending: 294, budget: 220 },
  { date: "2024-05-25", spending: 201, budget: 250 },
  { date: "2024-05-26", spending: 213, budget: 170 },
  { date: "2024-05-27", spending: 420, budget: 460 },
  { date: "2024-05-28", spending: 233, budget: 190 },
  { date: "2024-05-29", spending: 78, budget: 130 },
  { date: "2024-05-30", spending: 340, budget: 280 },
  { date: "2024-05-31", spending: 178, budget: 230 },
  { date: "2024-06-01", spending: 178, budget: 200 },
  { date: "2024-06-02", spending: 470, budget: 410 },
  { date: "2024-06-03", spending: 103, budget: 160 },
  { date: "2024-06-04", spending: 439, budget: 380 },
  { date: "2024-06-05", spending: 88, budget: 140 },
  { date: "2024-06-06", spending: 294, budget: 250 },
  { date: "2024-06-07", spending: 323, budget: 370 },
  { date: "2024-06-08", spending: 385, budget: 320 },
  { date: "2024-06-09", spending: 438, budget: 480 },
  { date: "2024-06-10", spending: 155, budget: 200 },
  { date: "2024-06-11", spending: 92, budget: 150 },
  { date: "2024-06-12", spending: 492, budget: 420 },
  { date: "2024-06-13", spending: 81, budget: 130 },
  { date: "2024-06-14", spending: 426, budget: 380 },
  { date: "2024-06-15", spending: 307, budget: 350 },
  { date: "2024-06-16", spending: 371, budget: 310 },
  { date: "2024-06-17", spending: 475, budget: 520 },
  { date: "2024-06-18", spending: 107, budget: 170 },
  { date: "2024-06-19", spending: 341, budget: 290 },
  { date: "2024-06-20", spending: 408, budget: 450 },
  { date: "2024-06-21", spending: 169, budget: 210 },
  { date: "2024-06-22", spending: 317, budget: 270 },
  { date: "2024-06-23", spending: 480, budget: 530 },
  { date: "2024-06-24", spending: 132, budget: 180 },
  { date: "2024-06-25", spending: 141, budget: 190 },
  { date: "2024-06-26", spending: 434, budget: 380 },
  { date: "2024-06-27", spending: 448, budget: 490 },
  { date: "2024-06-28", spending: 149, budget: 200 },
  { date: "2024-06-29", spending: 103, budget: 160 },
  { date: "2024-06-30", spending: 446, budget: 400 },
];

const chartConfig = {
  views: {
    label: "amount",
  },
  spending: {
    label: "Spending",
    color: "#35d399",
  },
  budget: {
    label: "Budget",
    color: "#3b82f6",
  },
};

export function BudgetBarGraph() {
  const [activeChart, setActiveChart] = React.useState("spending");

  const total = React.useMemo(
    () => ({
      spending: chartData.reduce((acc, curr) => acc + curr.spending, 0),
      budget: chartData.reduce((acc, curr) => acc + curr.budget, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Spending Vs Budget</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["spending", "budget"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
