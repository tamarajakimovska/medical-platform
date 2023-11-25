import React from "react";
import ReactApexChart from "react-apexcharts";

export const BasicAreaChart = () => {
    const state: any = {
        series: [
            {
                name: "2022",
                data: [97, 31, 65, 21, 39, 102, 49, 29, 58, 99, 185, 36]
            },
            {
                name: "2023",
                data: [40, 71, 35, 121, 49, 62, 69, 91, 148, 99, 85, 127]
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: false
                },
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
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            }
        },
    };
    return <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
};
