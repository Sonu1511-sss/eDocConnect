import React from "react";
import ReactApexChart from "react-apexcharts";

const MapBarSection = () => {
  const chartOptions = {
    series: [
      {
        name: "Infected Area",
        data: [68, 57, 17, 38, 40, 5, 10, 50, 19],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#4f46e5"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          borderRadius: 6,
        },
      },
      xaxis: {
        categories: [
          "Ashoka Garden",
          "Indrapuri",
          "Anand Nagar",
          "New Market",
          "MP Nagar",
          "Ayodha Bypass",
          "Karod",
          "Kolar",
          "Polytechnic Chouraha",
        ],
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "13px",
          },
        },
      },
      grid: {
        borderColor: "#e5e7eb",
        strokeDashArray: 5,
        xaxis: {
          lines: { show: true },
        },
        padding: { top: 5, right: 20 },
      },
      tooltip: { theme: "dark" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto my-20 px-4 md:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.666402745504!2d77.41975479941584!3d23.255216314178863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d7cf48696f%3A0xddbc57014db35da2!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1745835542803!5m2!1sen!2sin"
            className="w-full h-[450px] md:h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            title="Bhopal Map"
          ></iframe>
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col rounded-2xl text-gray-700 shadow-2xl border border-gray-200">
          <div className="flex items-center gap-4 p-6 border-b border-gray-100">
            <div className="rounded-full bg-indigo-600 p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </div>
            <div>
              <h6 className="text-xl font-semibold">Line Chart</h6>
              <p className="text-sm text-gray-500">
                Infected person percentage in Bhopal
              </p>
            </div>
          </div>
          <div className="p-6 flex-1">
            <ReactApexChart
              options={chartOptions.options}
              series={chartOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapBarSection;
