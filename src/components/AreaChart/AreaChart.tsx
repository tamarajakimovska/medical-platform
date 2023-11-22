import React from "react";
import ReactApexChart from "react-apexcharts";

export const AreaChart = () => {
    const state: any = {
        series: [{
            name: 'Income($)',
            data: [1700, 900, 1900, 2560, 3742, 2900, 4600, 6100, 5500, 7900]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                labels: {
                    show: false
                },
                // type: 'datetime',
                // TO-DO: Add to normal days
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z"]
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                enabled: true,
            },
            legend: {
                show: false
            }
        },
    };

    return (
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    )
}