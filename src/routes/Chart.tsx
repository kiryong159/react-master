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
          type="line"
          options={{
            stroke: { curve: "smooth" },
            theme: { mode: "dark" },
            chart: {
              toolbar: { show: false },
              width: 500,
              height: 300,
              background: "inherit",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: { axisTicks: { show: false }, labels: { show: false } },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
