import { useQuery } from "@tanstack/react-query";
import { fetchCoinChart } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IChartData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IChartData[]>(
    [coinId, "chartData"],
    () => fetchCoinChart(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Chart Loading..."
      ) : (
        <ApexChart
          series={[
            {
              name: "price",
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          type="area"
          options={{
            stroke: { curve: "smooth" },
            theme: { mode: "dark" },
            chart: {
              id: "area-datetime",
              type: "area",
              toolbar: { show: false },
              width: 500,
              height: 300,
              background: "inherit",
            },
            grid: { show: false },
            yaxis: { show: true },
            xaxis: {
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((data) =>
                new Date(data.time_close * 1000).toUTCString()
              ),
            },
            dataLabels: {
              enabled: false,
            },
            fill: {
              type: "gradient",
              colors: ["#1abc9c"],
              gradient: {
                gradientToColors: ["#3498db"],
                stops: [0, 100],
              },
            },
            tooltip: { y: { formatter: (value) => `${value.toFixed(1)}$` } },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
