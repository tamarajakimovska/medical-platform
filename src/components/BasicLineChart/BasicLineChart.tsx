import React from "react";
import ReactApexChart from "react-apexcharts";

export const BasicLineChart = () => {
    const state: any = {
        series: [{
            name: "Patients",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 99, 85, 127]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
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
                curve: 'straight'
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
    return <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
};
