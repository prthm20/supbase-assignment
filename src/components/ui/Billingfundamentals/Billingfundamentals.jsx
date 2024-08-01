/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x6UopD6LAih
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CartesianGrid, XAxis, Area, AreaChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="bg-background text-foreground p-8 md:p-12 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Neon's Serverless Billing Fundamentals</h1>
        <p className="text-muted-foreground text-lg mb-8">
          A modern, serverless architecture that autoscales to handle varying workloads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Branch-based Storage</h2>
            <p className="text-muted-foreground mb-4">
              Neon's Postgres databases can be branched like code, sharing the same underlying storage. This allows
              instant provisioning without additional storage costs.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <img src="https://neon.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstorage-illustration.c2d94873.jpg&w=640&q=90&dpl=dpl_AY6ss1XX2JNiiQdX9LYdb4iizMpq" alt="Branch-based Storage" width={500} height={500} className="rounded-lg" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Autoscaling Serverless Compute</h2>
            <p className="text-muted-foreground mb-4">
              Neon's serverless compute scales from 0.25 to 10 compute units (CUs) based on load. Compute usage is
              billed by the hour, with monthly plans including generous usage and extra hours billed separately.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <img
                src="https://neon.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompute-illustration.79ae7e0d.jpg&w=640&q=90&dpl=dpl_AY6ss1XX2JNiiQdX9LYdb4iizMpq"
                alt="Autoscaling Serverless Compute"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Architecture Diagram</h2>
          <div className="bg-muted p-4 rounded-lg">
            <AreachartChart className="aspect-[16/9]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function AreachartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}