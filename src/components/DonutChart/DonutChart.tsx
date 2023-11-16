import React from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
    series: any[]
    labels: string[];
    responsive: any[]
    donutChartType: string;
}

export const DonutChart = ({ series, labels, responsive, donutChartType }: Props) => {
    // const series = [19, 17, 13, 11, 38]
    const options: any = {
        chart: {
            // TO-DO: Check any
            type: donutChartType as any,
        },
        // labels: ["0-10", "10-20", "20-30", "30-40", "40+"],
        labels,
        theme: {
            monochrome: {
                enabled: true
            }
        },
        dataLabels: {
            formatter(val: any, opts: any) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
            },
        },
        legend: {
            show: false
        },
        yaxis: {
            show: false
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        responsive
    }



    return <ReactApexChart options={options} series={series} type={donutChartType as any} />

}