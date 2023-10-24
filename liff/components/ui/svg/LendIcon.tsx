const LendIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      className={
        "w-10 h-10 " + (isActive ? "fill-main-color" : "fill-app-gray")
      }
    >
      <g>
        <path
          className="st0"
          d="M112.347,67.766c-5.728-0.014-10.781-2.283-14.542-6.03c-3.741-3.761-6.009-8.821-6.023-14.542
          c0.014-5.72,2.282-10.774,6.016-14.542c3.768-3.734,8.821-6.01,14.549-6.023l321.188,0.007V0.006L112.347,0
          C86.282,0.013,65.167,21.135,65.153,47.194v380.428c0.013,26.065,21.129,47.187,47.194,47.201h81.166v0.97
          c0,19.966,17.815,36.207,39.707,36.207h96.148c21.892,0,39.7-16.241,39.7-36.207v-0.97h77.777V67.766H112.347z M385.578,338.411
          c0,77.544-37.96,102.997-37.96,132.088v5.294c0,9.193-8.175,16.639-18.248,16.639h-96.148c-10.073,0-18.248-7.446-18.248-16.639
          v-6.518c0-43.33-29.18-46.383-83.374-187.532c-5.425-13.112-2.29-20.875,4.167-24.354c2.922-0.853,5.995-1.444,9.33-1.444
          c4.311,0,8.608,0.79,12.727,2.111c5.734,2.558,10.918,6.724,13.916,12.342c11.764,25.323,16.02,39.157,18.289,39.157
          c0.956,0,1.554-2.455,2.22-7.536c-0.055-2.723,0.083-126.002,0.083-126.002c0-6.677,4.111-12.432,10.114-15.443
          c2.956-0.887,6.057-1.485,9.337-1.485c3.259,0,6.34,0.592,9.289,1.472c6.023,3.011,10.169,8.766,10.169,15.456v71.61
          c4.002-0.578,8.114-0.922,12.527-0.922V144.168c0-6.676,4.119-12.445,10.142-15.47c2.956-0.88,6.05-1.479,9.33-1.479
          c3.018,0,5.927,0.42,8.677,1.176c6.346,2.929,10.753,8.87,10.753,15.772v106.861c4.153,0.736,8.333,1.526,12.52,2.365V150.569
          c0-6.621,4.022-12.314,9.915-15.36c3.025-0.929,6.182-1.588,9.544-1.588c3.266,0,6.36,0.598,9.31,1.472
          c6.016,3.011,10.162,8.773,10.162,15.476v110.203c4.414,0.832,8.608,1.657,12.548,2.53v-87.636c0-6.711,4.132-12.486,10.155-15.505
          c2.943-0.88,6.03-1.472,9.289-1.472c3.259,0,6.34,0.592,9.282,1.472c6.03,3.011,10.183,8.794,10.183,15.505V338.411z"
        ></path>
      </g>
    </svg>
  );
};

export default LendIcon;