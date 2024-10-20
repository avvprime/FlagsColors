const flags = [
    {
        countryName: "Bahrain",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1500 900" width="1500" height="900">
            <path d="M 0,0 H 1500 V 900 H 0" fill="#fff" class="A ease-3" data-fill="A"/>
            <path class="B ease-3" data-fill="B"  d="M 1500,0 H 375 l 225,90 -225,90 225,90 -225,90 225,90 -225,90 225,90 -225,90 225,90 -225,90 h 1125" fill="#ce1126"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ce1126" },
        ],
		colors: ["#fff", "#ce1126"]
    },
    {
        countryName: "Albania",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 980 700" width="980" height="700">
            <path d="M980 0H0v700h980z" fill="#f00" class="A ease-3" data-fill="A" />
            <path class="B ease-3" data-fill="B" d="M516.51 528.944c-6.15-5.332-13.605-16.13-13.5-26.538.55-7.761 5.873-12.27 9.312-2.796 4.862 10.457 15.29 27.749 29.66 17.605 6.278-4.608 6.18-11.392-2.428-10.614-10.63-.728-17.16-6.577-21.917-21.636-.865-8.282 2.58-8.075 7.387-2.747 6.18 7.09 18.478 17.806 32.046 12.063 7.54-3.16 9.668-9.68-1.723-11.285-10.784.157-19.587-6.834-28.35-17.498-4.805-5.9 2.282-11.856 6.537-6.834 3.795 3.26 9.11 9.266 13.665 10.094 5.267 1.034 11.796.52 19.03-3.31 7.798-6.527 5.266-11.236-4.2-12.32-7.338.364-11.335 3.153-20.8-3.16-17.014-11.5-30.54-26.865-32.653-45.347-1.388-12.156 5.148-15.837 10.582-14.438 14.78 3.802 24.449 31.422 34.675 46.595 3.348 4.373 6.424 4.444 8.6 3.096 4.102-3.517 7.378-6.408 11.48-10.34 0 0 30.085 5.406 46.468 10.746l-18.242 6.483c-6.907-3.814-15.243.298-15.243 6.915-6.536 4.52-6.01 9.819-3.19 14.933.86-3.561 1.594-8.186 6.757-8.801 7.369 3.048 15.955-1.302 15.955-7.057l21.519-8.458 21.74 12.308c0 8.32 7.883 10.956 16.085 8.71 3.865 2.4 6.35 6.564 7.659 11.017 2.42-6.422 1.915-10.956-1.875-14.107 2.175-8.303-9.46-16.287-18.467-10.97l-15.64-8.98 26.77-.75c3.107 5.5 14.337 5.803 17.613 0 2.8-.767 5.166-1.255 10.625 2.803-1.72-6.566-5.068-9.373-10.09-9.373-3.816-6.761-17.626-6.73-19.62.882l-27.881.775 16.543-11.778c6.175 3.646 14.84-.407 16.575-7.03 2.462-2.927 5.498-4.302 11.474-2.316-3.08-5.455-7.42-7.083-15.258-3.38-7.15-5.418-16.574 1.153-15.144 6.608l-22.01 14.975c-15.976-4.767-44.91-12.19-44.91-12.19 3.445-3.624 6.94-6.991 10.379-10.665 1.242-2.152-.656-4.658-3.293-5.18-25.816-5.328-40.597-15.735-49.553-42.186-3.746-11.078 4.353-14.388 7.136-7.612 3.85 9.424 8.098 19.724 19.69 27.7 3.998 2.796 15.899.513 8.86-6.164-7.29-6.006-10.428-8.588-14.02-23.19 0-7.398 7.54-10.715 11.746-3.624 4.5 14.545 4.96 20.808 13.107 30.18 6.173 7.092 14.223 11.857 18.22 11.75 7.192-.1 14.432-7.87 4.813-13.511-14.125-5.642-19.287-13.353-21.366-20.708-2.274-12.833.21-19.046 7.952-12.733 10.98 12.476 31.94 35.717 42.92 46.538 12.305 9.424 26.423 9.73 37.66.157 6.432-7.404 4.15-15.372-5.921-13.667-22.726 1.918-39.935-9.367-58.817-39.862-3.697-6.884-4.71-16.771 3.445-9.416 9.41 12.733 23.13 23.554 35.89 28.212 12.806 4.602 23.38 2.06 27.481-1.968 4.943-4.942 3.643-17.392-4.91-14.39-7.038 2.484-16.957 3.104-27.28-.883-10.331-4.038-21.06-12.733-32.45-27.485-3.9-8.332-2.63-15.373 5.265-11.08 18.68 15.845 42.775 28.678 55.072 20.967 9.062-5.643 9.215-20.138-2.274-19.204-23.137 3.153-31.891-1.968-54.115-21.585-5.058-3.781-4.708-13.361 3.34-7.248 18.68 12.063 44.19 16.77 54.214 10.458 9.013-5.643 7.694-22.885-7.491-16.778-12.151 7.404-25.565 7.197-52.442-12.006-6.78-5.642-1.723-12.997 3.844-9.837 21.617 12.32 53.104 17.598 61.3-7.454 3.188-9.574-2.58-15.166-11.035-8.54-18.576 17.185-39.635 8.746-51.423.1-3.376-1.99-9.57-12.062 1.31-10.193 28.147 6.42 55.986.828 61.05-19.103 2.937-6.47-2.84-17.912-13.113-8.332-13.512 13.354-27.84 13.817-45.857 13.717-9.166-1.918-9.263-12.012-1.57-13.51 14.223.306 28.244-5.907 39.482-12.22 10.986-6.313 20.096-15.166 22.984-27.435 1.77-10.972-8.81-22.62-15.186-10.972-9.417 17.028-30.273 33.078-53.46 35.975-1.207-2.02-4.248-7.198-7.994-5.743-6.808 2.64-14.92 6.172-23.272 10.139-18.004 8.549-25.507 12.669-23.345 27.44 2.257 15.413-9.626 25.153-19.44 22.463-8.56-2.304-13.282-10.036-11.748-23.447 1.229-10.686 11.957-23.612 24.046-30.39 7.826-4.38 19.642-6.776 33.865-9.936 8.656-1.705 13.065-5.072 13.568-8.596 0 0-5.917 4.33-15.388 3.68-4.478-.32-7.478-2.29-8.608-4.3 3.293-.67 9.264.107 14.628.107 7.135-.057 23.702-1.655 28.097-11.7 1.367-6.626-2.987-7.817-7.038-3.573-4.353 4.587-6.146 8.71-14.88 10.25-5.314.935-10.63 2.02-17.466.365 3.85-4.573 9.968-9.252 15.186-8.39 1.716.286 3.997 1.87 5.824 4.716 1.116-7.248-.865-15.43-20.25-12.013.308-5.485-11.238-7.868-18.17-7.761-3.948.1-11.998 2.433-17.816 5.222-9.214 2.853-18.324 4.922-29.06 5.7 6.23 5.328 7.395 5.642 13.616 10.143-9.41 3.517-16.7 10.765-19.991 15.53 0 0 10.986-.307 13.77.934-11.496 3.36-16.659 5.379-22.733 11.592 2.127.364 5.314.984 6.682 1.505 1.423.514 1.053 1.448-.098 2.326-2.476 1.89-12.708 13.774-15.694 16.62-2.986-2.846-13.218-14.73-15.694-16.62-1.151-.878-1.521-1.812-.098-2.326 1.367-.52 4.555-1.141 6.682-1.505-6.075-6.213-11.237-8.232-22.733-11.592 2.784-1.241 13.77-.934 13.77-.934-3.293-4.765-10.582-12.013-19.992-15.53 6.222-4.501 7.387-4.815 13.616-10.144-10.735-.777-19.845-2.846-29.06-5.7-5.817-2.788-13.867-5.121-17.815-5.221-6.933-.107-18.478 2.276-18.17 7.76-19.385-3.416-21.366 4.766-20.25 12.014 1.827-2.846 4.108-4.43 5.824-4.715 5.218-.863 11.335 3.816 15.186 8.389-6.836 1.655-12.152.57-17.467-.364-8.733-1.54-10.526-5.664-14.88-10.25-4.051-4.245-8.404-3.054-7.037 3.573 4.395 10.044 20.96 11.642 28.097 11.699 5.364 0 11.335-.778 14.628-.107-1.13 2.012-4.13 3.98-8.608 4.3-9.472.65-15.388-3.68-15.388-3.68.503 3.524 4.91 6.89 13.568 8.596 14.223 3.16 26.039 5.557 33.865 9.937 12.089 6.777 22.817 19.703 24.045 30.389 1.534 13.41-3.188 21.143-11.747 23.447-9.814 2.69-21.697-7.05-19.44-22.463 2.162-14.771-5.341-18.891-23.345-27.44-8.352-3.967-16.464-7.5-23.272-10.14-3.746-1.454-6.787 3.725-7.994 5.744-23.187-2.897-44.043-18.947-53.46-35.975-6.376-11.648-16.957 0-15.186 10.972 2.888 12.27 11.998 21.122 22.984 27.435 11.238 6.313 25.259 12.526 39.482 12.22 7.693 1.498 7.596 11.592-1.57 13.51-18.018.1-32.345-.363-45.857-13.717-10.274-9.58-16.05 1.862-13.113 8.332 5.064 19.93 32.903 25.523 61.049 19.103 10.88-1.87 4.687 8.204 1.31 10.194-11.787 8.645-32.846 17.084-51.422-.1-8.454-6.627-14.224-1.035-11.035 8.539 8.196 25.052 39.683 19.774 61.3 7.454 5.567-3.16 10.624 4.195 3.844 9.837-26.877 19.203-40.29 19.41-52.442 12.006-15.185-6.107-16.504 11.135-7.491 16.778 10.023 6.313 35.533 1.605 54.213-10.458 8.05-6.113 8.398 3.467 3.34 7.248-22.223 19.617-30.977 24.738-54.114 21.585-11.49-.934-11.336 13.56-2.274 19.204 12.297 7.71 36.39-5.122 55.07-20.966 7.897-4.294 9.166 2.747 5.267 11.079-11.39 14.752-22.12 23.447-32.45 27.485-10.323 3.987-20.242 3.367-27.28.884-8.553-3.003-9.853 9.447-4.911 14.389 4.103 4.028 14.676 6.57 27.483 1.968 12.758-4.658 26.479-15.48 35.889-28.212 8.154-7.355 7.142 2.532 3.445 9.416-18.882 30.495-36.09 41.78-58.817 39.862-10.072-1.705-12.353 6.263-5.922 13.667 11.238 9.573 25.356 9.267 37.66-.157 10.98-10.821 31.94-34.062 42.92-46.538 7.743-6.313 10.227-.1 7.953 12.733-2.08 7.355-7.24 15.066-21.366 20.708-9.62 5.643-2.38 13.41 4.813 13.51 3.997.108 12.047-4.657 18.22-11.748 8.147-9.373 8.608-15.636 13.107-30.181 4.206-7.091 11.746-3.774 11.746 3.623-3.592 14.603-6.731 17.185-14.02 23.19-7.04 6.678 4.862 8.96 8.859 6.165 11.593-7.976 15.84-18.276 19.69-27.7 2.784-6.776 10.883-3.466 7.137 7.612-8.956 26.45-23.737 36.858-49.553 42.187-2.637.52-4.535 3.027-3.294 5.179 3.44 3.674 6.935 7.04 10.38 10.665 0 0-28.935 7.423-44.911 12.19l-22.01-14.975c1.43-5.455-7.993-12.026-15.144-6.61-7.839-3.701-12.178-2.073-15.258 3.382 5.976-1.986 9.012-.611 11.474 2.315 1.735 6.624 10.4 10.677 16.575 7.03l16.543 11.78-27.88-.776c-1.995-7.611-15.805-7.643-19.622-.882-5.02 0-8.37 2.807-10.09 9.373 5.46-4.058 7.827-3.57 10.626-2.803 3.276 5.803 14.506 5.5 17.612 0l26.771.75-15.64 8.98c-9.007-5.317-20.642 2.667-18.467 10.97-3.79 3.15-4.296 7.685-1.875 14.107 1.308-4.453 3.794-8.617 7.66-11.018 8.2 2.247 16.084-.388 16.084-8.71l21.74-12.307 21.52 8.458c0 5.755 8.585 10.105 15.954 7.057 5.163.615 5.897 5.24 6.757 8.8 2.82-5.113 3.346-10.412-3.19-14.932 0-6.617-8.336-10.73-15.243-6.915l-18.242-6.483c16.383-5.34 46.469-10.745 46.469-10.745 4.101 3.93 7.377 6.822 11.48 10.34 2.176 1.347 5.252 1.276 8.6-3.097 10.226-15.173 19.894-42.793 34.675-46.595 5.434-1.4 11.97 2.282 10.582 14.438-2.114 18.482-15.64 33.848-32.652 45.347-9.466 6.313-13.463 3.524-20.801 3.16-9.466 1.084-11.998 5.793-4.2 12.32 7.234 3.83 13.763 4.344 19.03 3.31 4.555-.828 9.87-6.834 13.665-10.094 4.255-5.022 11.342.934 6.536 6.834-8.762 10.664-17.565 17.655-28.35 17.498-11.39 1.605-9.262 8.125-1.722 11.285 13.568 5.743 25.865-4.972 32.046-12.063 4.806-5.328 8.252-5.535 7.387 2.747-4.758 15.059-11.287 20.908-21.917 21.636-8.608-.778-8.706 6.006-2.428 10.614 14.37 10.144 24.798-7.148 29.66-17.605 3.439-9.473 8.76-4.965 9.312 2.796.105 10.408-7.35 21.206-13.5 26.538C457.344 534.278 490 568.18 490 568.18s32.657-33.904 26.509-39.237zm43.763-383.94c-5.083 0-8.223 1.78-8.223 3.94 0 2.194 3.14 3.982 8.223 3.982 5.053 0 8.262-1.95 8.262-4.147 0-2.16-3.21-3.776-8.262-3.776zm-140.544 0c5.083 0 8.223 1.78 8.223 3.94 0 2.194-3.14 3.982-8.223 3.982-5.053 0-8.262-1.95-8.262-4.147 0-2.16 3.21-3.776 8.262-3.776z" fill-rule="evenodd"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#f00" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#000" },
        ],
		colors: ["#f00", "#000"]
    },
    {
        countryName: "Bangladesh",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 600" width="1000" height="600">
            <path fill="#006a4e" d="M0 0h1000v600H0z" class="A ease-3" data-fill="A"/>
            <circle cx="450" cy="300" r="200" fill="#f42a41" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#006a4e" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#f42a41" },
        ],
		colors: ["#006a4e", "#f42a41"]
    },
    {
        countryName: "Austria",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <rect fill="#ed2939" width="900" height="600" class="A ease-3" data-fill="A" />
            <rect fill="#fff" y="200" width="900" height="200" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ed2939" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
        ],
		colors: ["#ed2939", "#fff"]
    },
    {
        countryName: "England",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 800 480" width="800" height="480">
            <path fill="#FFF" d="m0,0h800v480H0" class="A ease-3" data-fill="A"/>
            <path stroke="#CD202C" stroke-width="96" d="m0,240h800M400,0v480" class="B ease-3" data-stroke="B"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#FFF" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#CD202C" },
        ],
		colors: ["#CD202C", "#FFF"]
    },
    {
        countryName: "Latvia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 600" width="1200" height="600">
            <path fill="#9E3039" d="m0,0h1200v600H0" class="A ease-3" data-fill="A" />
            <path fill="#FFF" d="m0,240h1200v120H0" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#9E3039" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFF" },
        ],
		colors: ["#9E3039", "#FFF"]
    },
    {
        countryName: "Indonesia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="450" height="300" viewBox="0 0 3 2">
            <rect fill="#FFF" width="3" height="2" class="A ease-3" data-fill="A"/>
            <rect fill="#F00" width="3" height="1" class="B ease-3" data-fill="B"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#FFF" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#F00" },
        ],
		colors: ["#F00", "#FFF"]
    },
    {
        countryName: "Peru",
        svg: `
        <svg
            viewbox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            id="Flag_of_Peru">
            <rect height="600" width="900" fill="#D91023" x="0" y="0" class="A ease-3" data-fill="A" />
            <rect height="600" width="300" fill="#fff" x="300" y="0" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#D91023" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
        ],
		colors: ["#D91023", "#fff"]
    },
    {
        countryName: "Palau",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 800 500" width="800" height="500">
            <rect fill="#0099FF" width="800" height="500" class="A ease-3" data-fill="A"/>
            <circle fill="#FFFF00" cx="350" cy="250" r="150" class="B ease-3" data-fill="B"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#0099FF" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFFF00" },
        ],
		colors: ["#0099FF", "#FFFF00"]
    },
    {
        countryName: "Morocco",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <rect width="900" height="600" fill="#c1272d" class="A ease-3" data-fill="A"/>
            <path d="m449.99991,224.31497-44.4674,136.87006 116.40181-84.55895H378.06451l116.4028,84.55895z" fill="none" stroke="#006233" stroke-width="14.62993431" class="B ease-3" data-stroke="B"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#c1272d" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#006233" },
        ],
		colors: ["#006233", "#c1272d"]
    },
    {
        countryName: "Monaco",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 800" width="1000" height="800">
            <path fill="#FFF" d="M0,0h1000V800H0z" class="A ease-3" data-fill="A"/>
            <path fill="#CE1126" d="M0,0h1000V400H0z" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#FFF" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#CE1126" },
        ],
		colors: ["#FFF", "#CE1126"]
    },
    {
        countryName: "Somalia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="0 0 81 54">
            <rect fill="#4189DD" width="81" height="54" class="A ease-3" data-fill="A"/>
            <g transform="translate(40.5 27) scale(13)">
            <g id="t">
            <polygon class="B ease-3" data-fill="B"  id="w" fill="#FFF" points="0,0 0,1 .5,1" transform="translate(0 -1) rotate(18)"/>
            <use xlink:href="#w" transform="scale(-1 1)"/>
            </g>
            <use xlink:href="#t" transform="rotate(72)"/>
            <use xlink:href="#t" transform="rotate(-72)"/>
            <use xlink:href="#t" transform="rotate(144)"/>
            <use xlink:href="#t" transform="rotate(-144)"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#4189DD" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFF" },
        ],
		colors: ["#FFF", "#4189DD"]
    },
    {
        countryName: "Poland",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 8 5">
            <rect width="8" height="5" fill="#dc143c" class="B ease-3" data-fill="B"/>
            <rect width="8" height="2.5" fill="#fff" class="A ease-3" data-fill="A"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#dc143c" },
        ],
		colors: ["#dc143c", "#fff"]
    },
    {
        countryName: "Switzerland",
        svg: `
        <svg width="512" height="512" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m0 0h32v32h-32z" fill="#f00" class="A ease-3" data-fill="A"/>
            <path d="m13 6h6v7h7v6h-7v7h-6v-7h-7v-6h7z" fill="#fff" class="B ease-3" data-fill="B"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#f00" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
        ],
		colors: ["#fff", "#f00"]
    },
    {
        countryName: "Sweden",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
            <path fill="#006aa7" d="M0,0H16V10H0Z" class="A ease-3" data-fill="A" />
            <path fill="#fecc00" d="M0,4H5V0H7V4H16V6H7V10H5V6H0Z" class="B ease-3" data-fill="B" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#006aa7" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fecc00" },
        ],
		colors: ["#fecc00", "#006aa7"]
    },
    {
        countryName: "Ukraine",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 800" width="1200" height="800">
            <rect width="1200" height="800" fill="#005BBB" class="B ease-3" data-fill="B" />
            <rect width="1200" height="400" y="400" fill="#FFD500" class="A ease-3" data-fill="A" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#FFD500" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#005BBB" },
        ],
		colors: ["#FFD500", "#005BBB"]
    },
    {
        countryName: "Vietnam",
        svg: `
        <svg width="900"  height="600" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect width="30" height="20" fill="#da251d" class="B ease-3" data-fill="B" />
            <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" class="A ease-3" data-fill="A"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ff0" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#da251d" },
        ],
		colors: ["#ff0", "#da251d"]
    },
    {
        countryName: "Japan",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <rect fill="#fff" height="600" width="900" class="A ease-5" data-fill="A" />
            <circle fill="#bc002d" cx="450" cy="300" r="180" class="B ease-5" data-fill="B"/>
        </svg>`,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ffffff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#bc002d" },
        ],
		colors: ["#bc002d", "#ffffff"]
    },
    {
        countryName: "United States",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1235" height="650" viewBox="0 0 7410 3900">
            <rect width="7410" height="3900" fill="#b22234" class="A ease-3" data-fill="A"/>
            <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" class="B ease-3" data-stroke="B"/>
            <rect width="2964" height="2100" fill="#3c3b6e" class="C ease-3" data-fill="C" />
            <g fill="#fff" class="D ease-3" data-fill="D">
            <g id="s18">
            <g id="s9">
            <g id="s5">
            <g id="s4">
            <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
            <use xlink:href="#s" y="420"/>
            <use xlink:href="#s" y="840"/>
            <use xlink:href="#s" y="1260"/>
            </g>
            <use xlink:href="#s" y="1680"/>
            </g>
            <use xlink:href="#s4" x="247" y="210"/>
            </g>
            <use xlink:href="#s9" x="494"/>
            </g>
            <use xlink:href="#s18" x="988"/>
            <use xlink:href="#s9" x="1976"/>
            <use xlink:href="#s5" x="2470"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#b22234" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#3c3b6e" },
            { name: "D", defaultColor: "#343A40", trueColor: "#fff" },
        ],
		colors: ["#b22234", "#fff", "#3c3b6e"]
    },
    {
        countryName: "United Arab Emirates",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 12 6">
            <rect width="12" height="6" fill="#00732f" id="green" class="A ease-3" data-fill="A" />
            <rect width="12" height="4" y="2" fill="#fff" class="B ease-3" data-fill="B" />
            <rect width="12" height="2" y="4" class="C ease-3" data-fill="C" />
            <rect width="3" height="6" fill="#f00" id="red" class="D ease-3" data-fill="D" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#00732f" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#000" },
            { name: "D", defaultColor: "#343A40", trueColor: "#f00" },
        ],
		colors: ["#00732f", "#fff", "#f00", "#000"]
    },
    {
        countryName: "United Kingdom",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="1200" height="600">
            <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clip-path="url(#s)">
                <path class="A ease-3" data-fill="A" d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path class="B ease-3" data-stroke="B" d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                <path class="C ease-3" data-stroke="C" d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                <path class="D ease-3" data-stroke="D" d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                <path class="E ease-3" data-stroke="E" d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#012169" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#C8102E" },
            { name: "D", defaultColor: "#343A40", trueColor: "#fff" },
            { name: "E", defaultColor: "#212529", trueColor: "#C8102E" },
        ],
		colors: ["#012169", "#C8102E", "#fff"]
    },
    {
        countryName: "Russia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="900" height="600">
            <rect fill="#fff" width="9" height="3" class="A ease-3" data-fill="A"/>
            <rect fill="#d52b1e" y="3" width="9" height="3" class="B ease-3" data-fill="B"/>
            <rect fill="#0039a6" y="2" width="9" height="2" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#d52b1e" },
            { name: "C", defaultColor: "#495057", trueColor: "#0039a6" },
        ],
		colors: ["#0039a6", "#d52b1e", "#fff"]
    },
    {
        countryName: "Palestine",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 6 3">
            <rect fill="#007A3D" width="6" height="3" class="A ease-3" data-fill="A" />
            <rect fill="#FFF" width="6" height="2" class="B ease-3" data-fill="B" />
            <rect width="6" height="1"/>
            <path fill="#CE1126" d="M0,0l2,1.5L0,3Z" class="C ease-3" data-fill="C" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007A3D" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFF" },
            { name: "C", defaultColor: "#495057", trueColor: "#CE1126" },
        ],
		colors: ["#007A3D", "#FFF", "#CE1126"]
    },
    {
        countryName: "Pakistan",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="-75 -40 120 80" version="1.1">
            <title>Flag of Pakistan</title>
            <rect x="-75" y="-40" width="120" height="80" fill="#fff" class="A ease-3" data-fill="A" />
            <rect x="-45" y="-40" width="90" height="80" fill="#01411C" class="B ease-3" data-fill="B" />
            <circle r="24" fill="#fff" class="C ease-3" data-fill="C" />
            <circle r="22" cx="-7" cy="-40" fill="#01411C" transform="rotate(-41.63354, 45, -40)" class="B ease-3" data-fill="B" />
            <polygon class="D ease-3" data-fill="D"  points="0,-513674 301930,415571 -488533,-158734 488533,-158734 -301930,415571" fill="#fff" transform="rotate(-41.63354) translate(16) rotate(18) scale(0.00001557408)"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#01411C" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
            { name: "D", defaultColor: "#343A40", trueColor: "#fff" },
        ],
		colors: ["#01411C", "#fff"]
    },
    {
        countryName: "Norway",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1100 800" version="1.1" width="1100" height="800" id="Flag_of_Norway">
            <rect width="1100" height="800" fill="#ef2b2d" class="A ease-3" data-fill="A" />
            <rect width="200" height="800" x="300" fill="#fff" class="B ease-3" data-fill="B" />
            <rect width="1100" height="200" y="300" fill="#fff" class="C ease-3" data-fill="C" />
            <rect width="100" height="800" x="350" fill="#002868" class="D ease-3" data-fill="D" />
            <rect width="1100" height="100" y="350" fill="#002868" class="E ease-3" data-fill="E" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ef2b2d" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
            { name: "D", defaultColor: "#343A40", trueColor: "#002868" },
            { name: "E", defaultColor: "#212529", trueColor: "#002868" },
        ],
		colors: ["#ef2b2d", "#fff", "#002868"]
    },
    {
        countryName: "Kuwait",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 12 6">
            <rect width="12" height="6" fill="#007a3d" class="A ease-3" data-fill="A"/>
            <rect width="12" height="4" y="2" fill="#fff" class="B ease-3" data-fill="B"/>
            <rect width="12" height="2" y="4" fill="#ce1126" class="C ease-3" data-fill="C"/>
            <polygon points="0,0 3,2 3,4 0,6"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007a3d" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce1126" },
        ],
		colors: ["#007a3d", "#fff", "#ce1126"]
    },
    {
        countryName: "Iceland",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="1250" height="900" viewBox="0 0 25 18">
            <path d="M0 0H25V18H0Z" fill="#02529C" class="A ease-3" data-fill="A" />
            <path d="M0 9H25M9 0V18" stroke-width="4" stroke="#FFF" class="B ease-3" data-stroke="B" />
            <path d="M0 9H25M9 0V18" stroke-width="2" stroke="#DC1E35" class="C ease-3" data-stroke="C" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#02529C" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFF" },
            { name: "C", defaultColor: "#495057", trueColor: "#DC1E35" },
        ],
		colors: ["#DC1E35", "#FFF", "#02529C"]
    },
    {
        countryName: "Ghana",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 9 6">
            <title>Flag of Ghana</title>
            <path fill="#006b3f" d="m0 0h9v6H0z" class="A ease-3" data-fill="A" />
            <path fill="#fcd116" d="m0 0h9v4H0z" class="B ease-3" data-fill="B" />
            <path fill="#ce1126" d="m0 0h9v2H0z" class="C ease-3" data-fill="C" />
            <path d="m4.5 2 .6498 2-1.7013-1.2361h2.103L3.8502 4z" class="D ease-3" data-fill"D"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#006b3f" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fcd116" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce1126" },
            { name: "D", defaultColor: "#343A40", trueColor: "#000" },
        ],
		colors: ["#006b3f", "#fcd116", "#ce1126", "#fff", "#000"]
    },
    {
        countryName: "Gambia",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 27 18">
                <title>Flag of the Gambia</title>
                <path fill="#fff" d="m0 0h27v18H0z" class="A ease-3" data-fill="A" />
                <path fill="#ce1126" d="m0 0h27v6H0z" class="B ease-3" data-fill="B" />
                <path fill="#0c1c8c" d="m0 7h27v4H0z" class="C ease-3" data-fill="C" />
                <path fill="#3a7728" d="m0 12h27v6H0z" class="D ease-3" data-fill="D" />
            </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ce1126" },
            { name: "C", defaultColor: "#495057", trueColor: "#0c1c8c" },
            { name: "D", defaultColor: "#343A40", trueColor: "#3a7728" },
        ],
		colors: ["#3a7728", "#0c1c8c", "#ce1126", "#fff"]
    },
    {
        countryName: "Djibouti",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path fill="#6ab2e7" d="M0 0h900v600H0z" class="A ease-3" data-fill="A" />
            <path fill="#12ad2b" d="M0 300h900v300H0z" class="B ease-3" data-fill="B" />
            <path d="M0 0v600l259.808-150 259.807-150-259.807-150z" fill="#fff" class="C ease-3" data-fill="C" />
            <path  class="D ease-3" data-fill="D" d="M198.86 225l18.616 57.295h60.243l-48.738 35.41L247.598 375l-48.738-35.41L150.122 375l18.616-57.295L120 282.295h60.243z" fill="#d7141a"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#6ab2e7" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#12ad2b" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
            { name: "D", defaultColor: "#343A40", trueColor: "#d7141a" },
        ],
		colors: ["#12ad2b", "#6ab2e7", "#d7141a", "#fff"]
    },
    {
        countryName: "Democratic Republic of Congo",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600" viewbox="0 0 800 600">
            <rect width="800" height="600" x="0" y ="0" style="fill:#007fff" class="A ease-3" data-fill="A"/>
            <path class="B ease-3" data-fill="B" d="m 36,120 84,0 26,-84 26,84 84,0 -68,52 26,84 -68,-52 -68,52 26,-84 -68,-52 z M 750,0 0,450 0,600 0,600 50,600 800,150 800,0 750,0" style="fill:#f7d618" />
            <path class="C ease-3" data-fill="C" d="M 800,0 0,480 0,600 0,600 0,600 800,120 800,0" style="fill:#ce1021" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#f7d618" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce1021" },
        ],
		colors: ["#007fff", "#ce1021", "#f7d618",]
    },
    {
        countryName: "Cuba",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 10 5" fill="#fff" class="C ease-3" data-fill="C">
            <title>Flag of Cuba</title>
            <path fill="#002a8f" d="m0 0h10v5H0z" class="A ease-3" data-fill="A"/>
            <path d="m1 1h9v1H3v1h7v1H1z"/>
            <path fill="#cf142b" d="m4.33 2.5L0 5V0z" class="B ease-3" data-fill="B" />
            <path d="m1.443 1.75-.44 1.357 1.154-.839H.73l1.154 .839z"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#002a8f" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#cf142b" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
        ],
		colors: ["#fff", "#cf142b", "#002a8f",]
    },
    {
        countryName: "Costa Rica",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1000" height="600" viewBox="0 0 10 6">
            <path d="M0,0h10v6H0z" fill="#002b7f" class="A ease-3" data-fill="A"/>
            <path d="M0,1h10v4H0z" fill="#fff" class="B ease-3" data-fill="B"/>
            <path d="M0,2h10v2H0z" fill="#ce1126" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#002b7f" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce1126" },
        ],
		colors: ["#fff", "#002b7f", "#ce1126",]
    },
    {
        countryName: "Comoros",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="600" viewBox="0 0 500 300">
            <rect fill="#3A75C4" width="500" height="300" class="A ease-3" data-fill="A" />
            <rect fill="#CE1126" width="500" height="225" class="B ease-3" data-fill="B" />
            <rect fill="#FFF" width="500" height="150" class="C ease-3" data-fill="C" />
            <rect fill="#FFC61E" width="500" height="75" class="D ease-3" data-fill="D" />
            <path fill="#3D8E33" d="M0,300l250-150L0,0V300z" class="E ease-3" data-fill="E" />
            <circle fill="#FFF" cx="85" cy="150" r="67.5" class="C ease-3" data-fill="C" />
            <circle fill="#3D8E33" cx="115" cy="150" r="67.5" class="E ease-3" data-fill="E" />
            <path id="star" fill="#FFF"  class="C ease-3" data-fill="C" d="M100.0104,89.1996l7.3594,22.5883L88.1125,97.8394h23.775l-19.2573,13.9486L100.0104,89.1996z"/>
            <use xlink:href="#star" y="32.2083"/>
            <use xlink:href="#star" y="64.4166"/>
            <use xlink:href="#star" y="96.625"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#3A75C4" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#CE1126" },
            { name: "C", defaultColor: "#495057", trueColor: "#FFF" },
            { name: "D", defaultColor: "#343A40", trueColor: "#FFC61E" },
            { name: "E", defaultColor: "#212529", trueColor: "#3D8E33" },
        ],
		colors: ["#3A75C4", "#FFC61E", "#FFF", "#CE1126", "#3D8E33"]
    },
    {
        countryName: "Central African Republic",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 12 8">
            <title>Flag of the Central African Republic</title>
            <path fill="#fff" d="m0 0h12v8H0z" class="A ease-3" data-fill="A"/>
            <path fill="#003082" d="m0 0h12v2H0z" class="B ease-3" data-fill="B"/>
            <path fill="#289728" d="m0 4h12v4H0z" class="C ease-3" data-fill="C"/>
            <path fill="#ffce00" d="m0 6h12v2H0zM2 .187l.529 1.626L1.145.808h1.71L1.471 1.813z" class="D ease-3" data-fill="D"/>
            <path fill="#d21034" d="m5 0h2v8H5z" class="E ease-3" data-fill="E"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#003082" },
            { name: "C", defaultColor: "#495057", trueColor: "#289728" },
            { name: "D", defaultColor: "#343A40", trueColor: "#ffce00" },
            { name: "E", defaultColor: "#212529", trueColor: "#d21034" },
        ],
		colors: ["#ffce00", "#d21034", "#003082", "#fff", "#289728"]
    },
    {
        countryName: "Cameroon",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewbox="0 0 900 600" width="900" height="600">
            <path d="M0 0h400v600H0z" fill="#007a5e" class="A ease-3" data-fill="A"/>
            <path d="M300 0h400v600H300z" fill="#ce1126" class="B ease-3" data-fill="B"/>
            <path d="M600 0h300v600H600zM450 220l47 144.8-122.8-89.5h151.6L403 364.8z" fill="#fcd116" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007a5e" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ce1126" },
            { name: "C", defaultColor: "#495057", trueColor: "#fcd116" },
        ],
		colors: ["#007a5e", "#fcd116", "#ce1126"]
    },
    {
        countryName: "South Africa",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="0 0 9 6">
            <clipPath id="Z">
                <path d="M0,0 4.5,3 0,6" id="X"/>
            </clipPath>
            <clipPath id="A">
                <path d="M0,0H9V6H0z"/>
            </clipPath>
            <g clip-path="url(#A)">
                <path d="M0,0V6H9V0z" fill="#001489" data-fill="B" class="B ease-3" />
                <path d="M0,0V3H9V0z" fill="#e03c31" data-fill="C" class="C ease-3"/>
                <g stroke-width="2" stroke="#ffffff" class="A ease-3" data-stroke="A">
                    <path d="M0,0 4.5,3 0,6M4.5,3H9" id="W"/>
                    <use xlink:href="#X" stroke="#ffb81c" clip-path="url(#Z)" class="D ease-3" data-stroke="D"/>
                </g>
                <use xlink:href="#W" fill="none" stroke="#007749" stroke-width="1.2" class="E ease-3" data-stroke="E"/>
            </g>
        </svg>`,
        colorGroups: [
            { name: "A", defaultColor: "#111111", trueColor: "#ffffff" },
            { name: "B", defaultColor: "#777777", trueColor: "#001489" },
            { name: "C", defaultColor: "#555555", trueColor: "#e03c31" },
            { name: "D", defaultColor: "#333333", trueColor: "#ffb81c" },
            { name: "E", defaultColor: "#999999", trueColor: "#007749" },
        ],
		colors: ["#001489", "#ffffff", "#e03c31", "#ffb81c", "#007749"]
    },
    {
        countryName: "Azerbaijan",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 600" width="1200" height="600">
            <rect width="1200" height="600" fill="#3f9c35" class="A ease-3" data-fill="A"/>
            <rect width="1200" height="400" fill="#ed2939" class="B ease-3" data-fill="B"/>
            <rect width="1200" height="200" fill="#00b9e4" class="C ease-3" data-fill="C"/>
            <circle cx="580" cy="300" r="90" fill="#fff" class="D ease-3" data-fill="D"/>
            <circle cx="600" cy="300" r="75" fill="#ed2939" class="B ease-3" data-fill="B"/>
            <path class="D ease-3" data-fill="D" d="M680,250 689.567,276.903 715.355,264.645 703.097,290.433 730,300 703.097,309.567 715.355,335.355 689.567,323.097 680,350 670.433,323.097 644.645,335.355 656.903,309.567 630,300 656.903,290.433 644.645,264.645 670.433,276.903 680,250z" fill="#fff"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#3f9c35" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ed2939" },
            { name: "C", defaultColor: "#495057", trueColor: "#00b9e4" },
            { name: "D", defaultColor: "#343A40", trueColor: "#fff" },
        ],
		colors: ["#ed2939", "#3f9c35", "#00b9e4", "#fff"]
    },
    {
        countryName: "Australia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1280" height="640" viewBox="0 0 10080 5040">
            <defs>
                <clipPath id="c1"><path d="M0,0H6V3H0z"/></clipPath>
                <clipPath id="c2"><path d="M0,0V1.5H6V3H6zM6,0H3V3H0V3z"/></clipPath>
                <path id="Star7" d="M0,-360 69.421398,-144.155019 281.459334,-224.456329 155.988466,-35.603349 350.974048,80.107536 125.093037,99.758368 156.198146,324.348792 0,160 -156.198146,324.348792 -125.093037,99.758368 -350.974048,80.107536 -155.988466,-35.603349 -281.459334,-224.456329 -69.421398,-144.155019z"/>
                <path id="Star5" d="M0,-210 54.859957,-75.508253 199.721868,-64.893569 88.765275,28.841586 123.434903,169.893569 0,93.333333 -123.434903,169.893569 -88.765275,28.841586 -199.721868,-64.893569 -54.859957,-75.508253z"/>
                <use id="Cstar" xlink:href="#Star7" transform="scale(2.1)"/>
            </defs>
            <g transform="scale(840)">
                <rect width="12" height="6" fill="#00008b" class="A ease-3" data-fill="A" />
                <path d="M0,0 6,3M6,0 0,3" stroke="#fff" stroke-width="0.6" clip-path="url(#c1)" class="B ease-3" data-stroke="B" />
                <path d="M0,0 6,3M6,0 0,3" stroke="#f00" stroke-width="0.4" clip-path="url(#c2)" class="C ease-3" data-stroke="C" />
                <path d="M3,0V3M0,1.5H6" stroke="#fff" class="B ease-3" data-stroke="B" />
                <path d="M3,0V3M0,1.5H6" stroke="#f00" stroke-width="0.6" class="C ease-3" data-stroke="C"/>
            </g>
            <g fill="#fff" class="D ease-3" data-fill="D">
                <use id="Comwlth" xlink:href="#Cstar" x="2520" y="3780"/>
                <use id="αCrucis" xlink:href="#Star7" x="7560" y="4200"/>
                <use id="βCrucis" xlink:href="#Star7" x="6300" y="2205"/>
                <use id="γCrucis" xlink:href="#Star7" x="7560" y="840"/>
                <use id="δCrucis" xlink:href="#Star7" x="8680" y="1869"/>
                <use id="εCrucis" xlink:href="#Star5" x="8064" y="2730"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#00008b" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#f00" },
            { name: "D", defaultColor: "#495057", trueColor: "#fff" },
        ],
		colors: ["#fff", "#00008b", "#f00"]
    },
    {
        countryName: "Angola",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path class="A ease-3" data-fill="A" d="M0 0h900v600H0z"/>
            <path class="B ease-3" data-fill="B" fill="#cc092f" d="M0 0h900v300H0z"/>
            <path class="C ease-3" data-fill="C" d="M390.858 205.797h36.644l11.112-34.537 11.41 34.537h36.64l-29.433 21.926 11.409 35.135-30.026-21.324-29.731 21.324 11.41-35.135z" fill="#ffcb00" fill-rule="evenodd"/>
            <path class="C ease-3" data-fill="C" d="M524.801 394.706l-28.827-22.53c29.127-23.724 48.052-60.064 48.052-100.605 0-61.866-44.144-113.824-102.411-126.137l4.504-21.025c8.11 1.803 17.624 5.217 25.432 7.916l7.51-12.608c8.1 3.9 17.118 7.803 24.621 12.608l-5.703 13.518c7.51 4.808 16.575 12.251 21.616 18.112l11.277-8.809c6.008 6.604 13.218 13.507 18.323 20.721l-10.211 10.512c6.594 9.68 9.143 14.135 14.004 25.287l14.327-3.36c2.706 8.408 6.814 18.702 8.32 27.408l-13.566 5.332c1.62 6.766 3.718 18.584 3.583 28.525-.011.598-.056 1.276-.056 1.878l14.167 2.021c-.6 8.712-.897 18.625-2.704 27.333h-14.714c-2.1 9.005-4.81 20.02-8.11 28.425l12.308 7.213c-3.901 7.805-7.8 17.117-12.908 24.626l-13.514-5.703c-5.11 7.505-10.81 14.71-17.118 21.321l8.706 11.41c-2.398 2.1-4.502 4.205-6.908 6.61m-63.362-2.704l21.772 13.12c-2.03 1.857-8.112 5.006-9.724 5.644l3.56 13.666c-8.407 2.708-17.42 6.608-26.724 8.412l-5.405-13.513c-8.71 1.8-17.416 3-26.427 3l-1.807 14.114c-8.406-.598-18.617 0-27.928-2.102v-14.11c-8.411-1.506-16.519-3.606-24.324-6.312l-6.91 12.322c-7.207-3.01-16.816-6.615-24.628-11.416l5.108-13.514c-6.31-3.307-12.015-7.509-17.42-11.72l13.515-17.118c22.226 17.722 50.153 28.228 80.787 28.228 16.221 0 32.132-2.697 46.555-8.7" fill="#ffcb00" fill-rule="evenodd"/>
            <path class="C ease-3" data-fill="C" d="M552.192 426.811L408.462 317.43l-1.31 1.866 143.36 109.573-8.509 10.647-139.753-89.64c-37.839-23.726-36.337-42.344-28.528-62.466l6.608-16.217c3.605 21.023 25.223 36.944 47.748 54.658l126.914 97.497zm36.084 32.6a2.23 2.23 0 0 1-2.23-2.238 2.23 2.23 0 0 1 2.23-2.232c1.237 0 2.24 1 2.24 2.232a2.238 2.238 0 0 1-2.24 2.239m-8.59-6.308a2.24 2.24 0 0 1-2.237-2.235 2.236 2.236 0 1 1 2.237 2.235m-8.79-7.006c-1.232 0-2.236-1-2.236-2.231a2.236 2.236 0 0 1 4.47 0c0 1.231-1 2.231-2.234 2.231m29.554 12.4l-43.065-33.365-12.514 16.127 37.41 26.235c3.005 2.1 3.3 11.718 14.407 13.222 4.513.596 7.508-2.71 7.508-2.71 4.84-5.892 3.521-14.003-3.746-19.51" fill="#ffcb00" fill-rule="evenodd"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#000" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#cc092f" },
            { name: "C", defaultColor: "#495057", trueColor: "#ffcb00" },
        ],
		colors: ["#000", "#ffcb00", "#cc092f"]
    },
    {
        countryName: "Algeria",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path class="A ease-3" data-fill="A" fill="#fff" d="M0 0h900v600H0z"/>
            <path class="B ease-3" data-fill="B" fill="#006233" d="M0 0h450v600H0z"/>
            <path class="C ease-3" data-fill="C" fill="#d21034" d="M580 225a150 150 0 1 0 0 150 120 120 0 1 1 0-150m5 75l-135-44 84 115V229l-84 115z"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#006233" },
            { name: "C", defaultColor: "#495057", trueColor: "#d21034" },
        ],
		colors: ["#006233", "#d21034", "#fff"]
    },
    {
        countryName: "Mali",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path d="M0 0h900v600H0z" fill="#ce1126" class="A ease-3" data-fill="A"/>
            <path d="M0 0h600v600H0z" fill="#fcd116" class="B ease-3" data-fill="B"/>
            <path d="M0 0h300v600H0z" fill="#14b53a" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ce1126" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fcd116" },
            { name: "C", defaultColor: "#495057", trueColor: "#14b53a" },
        ],
		colors: ["#ce1126", "#14b53a", "#fcd116"]
    },
    {
        countryName: "Maldives",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 720 480" width="720" height="480">
            <rect fill="#D21034" width="720" height="480" class="A ease-3" data-fill="A"/>
            <g fill="#007E3A" class="B ease-3" data-fill="B">
                <rect width="480" height="240" x="120" y="120" class="D ease-3" data-fill="D"/>
                <circle fill="#FFF" cx="390" cy="240" r="80" class="C ease-3" data-fill="C"/>
                <circle cx="420" cy="240" r="80" class="B ease-3" data-fill="B"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#D21034" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#007E3A" },
            { name: "C", defaultColor: "#495057", trueColor: "#FFF" },
        ],
		colors: ["#D21034", "#007E3A", "#FFF"]
    },
    {
        countryName: "Madagascar",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <rect fill="#007E3A" width="900" height="600" class="A ease-3" data-fill="A"/>
            <rect fill="#FC3D32" width="900" height="300" class="B ease-3" data-fill="B"/>
            <rect fill="#FFF" width="300" height="600" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007E3A" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FC3D32" },
            { name: "C", defaultColor: "#495057", trueColor: "#FFF" },
        ],
		colors: ["#FFF", "#007E3A", "#FC3D32"]
    },
    {
        countryName: "Luxembourg",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 600" width="1000" height="600">
            <rect width="1000" height="300" y="300" fill="#00A1DE" class="A ease-3" data-fill="A"/>
            <rect width="1000" height="300" fill="#ed2939" class="B ease-3" data-fill="B"/>
            <rect width="1000" height="200" y="200" fill="#fff" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#00A1DE" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ed2939" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
        ],
		colors: ["#fff", "#00A1DE", "#ed2939"]
    },
    {
        countryName: "Lithuania",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 600" width="1000" height="600">
            <path fill="#c1272d" d="M0 0h1000v600H0z" class="A ease-3" data-fill="A"/>
            <path fill="#006a44" d="M0 0h1000v400H0z" class="B ease-3" data-fill="B"/>
            <path fill="#fdb913" d="M0 0h1000v200H0z" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#c1272d" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#006a44" },
            { name: "C", defaultColor: "#495057", trueColor: "#fdb913" },
        ],
		colors: ["#fdb913", "#006a44", "#c1272d"]
    },
    {
        countryName: "Laos",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 400" width="600" height="400">
            <rect fill="#ce1126" width="600" height="400" class="A ease-3" data-fill="A"/>
            <rect fill="#002868" y="100" width="600" height="200" class="B ease-3" data-fill="B"/>
            <circle fill="#fff" cx="300" cy="200" r="80" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ce1126" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#002868" },
            { name: "C", defaultColor: "#495057", trueColor: "#fff" },
        ],
		colors: ["#fff", "#002868", "#ce1126"]
    },
    {
        countryName: "Ireland",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewbox="0 0 1200 600">
            <rect fill="#169b62" width="1200" height="600" class="A ease-3" data-fill="A" />
            <rect fill="#fff" x="400" width="800" height="600" class="B ease-3" data-fill="B" />
            <rect fill="#ff883e" x="800" width="400" height="600" class="C ease-3" data-fill="C" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#169b62" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#ff883e" },
        ],
		colors: ["#169b62", "#fff", "#ff883e"]
    },
    {
        countryName: "Italy",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="1000" viewBox="0 0 3 2">
            <rect width="3" height="2" fill="#009246" class="A ease-3" data-fill="A"/>
            <rect width="2" height="2" x="1" fill="#fff" class="B ease-3" data-fill="B"/>
            <rect width="1" height="2" x="2" fill="#ce2b37" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#009246" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce2b37" },
        ],
		colors: ["#ce2b37", "#fff", "#009246"]
    },
    {
        countryName: "Hungary",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 6 3">
            <rect fill="#436F4D" width="6" height="3" class="A ease-3" data-fill="A"/>
            <rect fill="#FFF" width="6" height="2" class="B ease-3" data-fill="B"/>
            <rect fill="#CD2A3E" width="6" height="1" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#436F4D" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#FFF" },
            { name: "C", defaultColor: "#495057", trueColor: "#CD2A3E" },
        ],
		colors: ["#FFF", "#CD2A3E", "#436F4D"]
    },
    {
        countryName: "Guinea",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path fill="#ce1126" d="M0 0h900v600H0z" class="A ease-3" data-fill="A" />
            <path fill="#fcd116" d="M300 0h600v600H300z" class="B ease-3" data-fill="B"/>
            <path fill="#009460" d="M600 0h300v600H600z" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ce1126" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fcd116" },
            { name: "C", defaultColor: "#495057", trueColor: "#009460" },
        ],
		colors: ["#009460", "#ce1126", "#fcd116"]
    },
    {
        countryName: "Georgia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="0 0 300 200">
            <defs>
                <g id="smallcross">
                    <clipPath id="vclip">
                        <path d="M-109,104 a104,104 0 0,0 0,-208 H109 a104,104 0 0,0 0,208 z"/>
                    </clipPath>
                    <path id="varm" d="M-55,74 a55,55 0 0,1 110,0 V-74 a55,55 0 0,1 -110,0 z" clip-path="url(#vclip)"/>
                    <use xlink:href="#varm" transform="rotate(90)"/>
                </g>
            </defs>
            <rect width="300" height="200" style="fill:#fff" class="A ease-3" data-fill="A"/>
            <path d="m 130,0 0,80 -130,0 L 0,120 l 130,0 0,80 40,0 0,-80 130,0 0,-40 -130,0 L 170,0 130,0 z" style="fill:#ff0000" class="B ease-3" data-fill="B"/>
            <use xlink:href="#smallcross" transform="translate(64.45,39.45)" fill="#f00"  class="C ease-3" data-fill="C"/>
            <use xlink:href="#smallcross" transform="translate(235.55,160.55)" fill="#f00" class="C ease-3" data-fill="C"/>
            <use xlink:href="#smallcross" transform="translate(235.55,39.45)" fill="#f00" class="C ease-3" data-fill="C"/>
            <use xlink:href="#smallcross" transform="translate(64.45,160.55)" fill="#f00" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ff0000" },
            { name: "C", defaultColor: "#495057", trueColor: "#ff0000" },
        ],
		colors: ["#ff0", "#fff", "#ff0000"]
    },
    {
        countryName: "Germany",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 5 3">
            <desc>Flag of Germany</desc>
            <rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000" class="A ease-3" data-fill="A"/>
            <rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00" class="B ease-3" data-fill="B"/>
            <rect id="gold_stripe" width="5" height="1" y="2" x="0" fill="#FFCE00" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#000" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#D00" },
            { name: "C", defaultColor: "#495057", trueColor: "#FFCE00" },
        ],
		colors: ["#D00", "#FFCE00", "#000"]
    },
    {
        countryName: "Finland",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1800 1100" width="1800" height="1100">
            <rect width="1800" height="1100" fill="#fff" class="A ease-3" data-fill="A"/>
            <rect width="1800" height="300" y="400" fill="#003580" class="B ease-3" data-fill="B"/>
            <rect width="300" height="1100" x="500" fill="#003580" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#003580" },
            { name: "C", defaultColor: "#495057", trueColor: "#003580" },
        ],
		colors: ["#fcd116", "#003580", "#fff"]
    },
    {
        countryName: "Gabon",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 750" width="1000" height="750">
            <path fill="#3a75c4" d="M0 0h1000v750H0z" class="A ease-3" data-fill="A"/>
            <path fill="#fcd116" d="M0 0h1000v500H0z" class="B ease-3" data-fill="B"/>
            <path fill="#009e60" d="M0 0h1000v250H0z" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#3a75c4" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fcd116" },
            { name: "C", defaultColor: "#495057", trueColor: "#009e60" },
        ],
		colors: ["#fcd116", "#009e60", "#3a75c4"]
    },
    {
        countryName: "France",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <rect width="900" height="600" fill="#ED2939" class="A ease-3" data-fill="A" />
            <rect width="600" height="600" fill="#fff"  class="B ease-3" data-fill="B"/>
            <rect width="300" height="600" fill="#002395"  class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ED2939" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#002395" },
        ],
		colors: ["#fff", "#ED2939", "#002395"]
    },
    {
        countryName: "Estonia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="990" height="630" viewBox="0 0 33 21"> 
            <rect class="A ease-3" data-fill="A" fill="#FFF" width="33" height="21"/> 
            <rect class="B ease-3" data-fill="B" width="33" height="14"/>
            <rect class="C ease-3" data-fill="C" fill="#0072ce" width="33" height="7"/> 
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#FFF" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#000" },
            { name: "C", defaultColor: "#495057", trueColor: "#0072ce" },
        ],
		colors: ["#FFF", "#000", "#0072ce"]
    },
    {
        countryName: "Czech Republic",
        svg: `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewbox="0 0 900 600">
            <rect width="900" height="600" fill="#d7141a" class="A ease-3" data-fill="A" />
            <rect width="900" height="300" fill="#fff" class="B ease-3" data-fill="B"/>
            <path d="M 450,300 0,0 V 600 z" fill="#11457e" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#d7141a" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#11457e" },
        ],
		colors: ["#11457e", "#fff", "#d7141a"]
    },
    {
        countryName: "Chile",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="1000" viewBox="0 0 24 16">
            <path class="A ease-3" data-fill="A" fill="#0039a6" d="M0 0h24v16H0z"/>
            <path class="B ease-3" data-fill="B" style="isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1;marker:none" d="M3.99962 2.03272l.44113 1.35772 1.42758-.00083-1.15495.8391.44193 1.35745-1.15493-.83913-1.15445.83978.44117-1.3577-1.15542-.83845 1.42758.00003zM8 0v16h16V0z" color="#000" overflow="visible" fill="#fff" paint-order="markers stroke fill"/>
            <path class="C ease-3" data-fill="C" fill="#d72b1f" d="M24 16H0V8h24"/>
        </svg>

        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#0039a6" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#d72b1f" },
        ],
		colors: ["#fff", "#0039a6", "#d72b1f"]
    },
    {
        countryName: "Colombia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path d="M0 0h900v600H0z" fill="#fcd116" class="A ease-3" data-fill="A" />
            <path d="M0 300h900v300H0z" fill="#003893" class="B ease-3" data-fill="B"/>
            <path d="M0 450h900v150H0z" fill="#ce1126" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fcd116" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#003893" },
            { name: "C", defaultColor: "#495057", trueColor: "#ce1126" },
        ],
		colors: ["#fcd116", "#ce1126", "#003893"]
    },
    {
        countryName: "Chad",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewbox="0 0 900 600">
            <path d="M0 0h900v600H0z" fill="#c60c30" class="A ease-3" data-fill="A"/>
            <path d="M0 0h600v600H0z" fill="#fecb00" class="B ease-3" data-fill="B"/>
            <path d="M0 0h300v600H0z" fill="#002664" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#c60c30" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fecb00" },
            { name: "C", defaultColor: "#495057", trueColor: "#002664" },
        ],
		colors: ["#fecb00", "#002664", "#c60c30"]
    },
    {
        countryName: "Canada",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 9600 4800">
            <title>Flag of Canada</title>
            <path class="A ease-3" data-fill="A" fill="#f00" d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"/>
            <path class="B ease-3" data-fill="B" fill="#fff" d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#f00" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
        ],
		colors: ["#00966E", "#f00", "#fff"]
    },
    {
        countryName: "Bulgaria",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 5 3">
            <rect width="5" height="3" fill="#fff" class="A ease-3" data-fill="A"/>
            <rect width="5" height="2" y="1" fill="#00966E" class="B ease-3" data-fill="B"/>
            <rect width="5" height="1" y="2" fill="#D62612" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#fff" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#00966E" },
            { name: "C", defaultColor: "#495057", trueColor: "#D62612" }
        ],
		colors: ["#00966E", "#D62612", "#fff"]
    },
    {
        countryName: "Burkina Faso",
        svg: `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900" height="600" viewbox="0 0 900 600">
            <rect width="900" height="600" fill="#009e49" class="A ease-3" data-fill="A" />
            <rect width="900" height="300" fill="#ef2b2d" class="B ease-3" data-fill="B" />
            <g transform="translate(450,300)" fill="#fcd116" class="C ease-3" data-fill="C" >
                <g id="c">
                    <path id="t" d="M 0,-100 V 0 H 50" transform="rotate(18 0,-100)"/>
                    <use xlink:href="#t" transform="scale(-1,1)"/>
                </g>
                <use xlink:href="#c" transform="rotate(72)"/>
                <use xlink:href="#c" transform="rotate(144)"/>
                <use xlink:href="#c" transform="rotate(216)"/>
                <use xlink:href="#c" transform="rotate(288)"/>
            </g>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#009e49" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ef2b2d" },
            { name: "C", defaultColor: "#495057", trueColor: "#fcd116" }
        ],
		colors: ["#009e49", "#ef2b2d", "#fcd116"]
    },
    {
        countryName: "Bolivia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1100 750" width="1100" height="750">
            <rect fill="#007934" width="1100" height="750"  class="A ease-3" data-fill="A"/>
            <rect fill="#F9E300" width="1100" height="500" class="B ease-3" data-fill="B" />

            <rect fill="#D52B1E" width="1100" height="250"  class="C ease-3" data-fill="C"/>

        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#007934" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#F9E300" },
            { name: "C", defaultColor: "#495057", trueColor: "#D52B1E" }
        ],
		colors: ["#F9E300", "#D52B1E", "#007934"]
    },
    {
        countryName: "Benin",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 600" width="900" height="600">
            <path fill="#e8112d" d="M0 0h900v600H0z" class="A ease-3" data-fill="A"/>
            <path fill="#fcd116" d="M0 0h900v300H0z" class="B ease-3" data-fill="B"/>
            <path fill="#008751" d="M0 0h360v600H0z" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#e8112d" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fcd116" },
            { name: "C", defaultColor: "#495057", trueColor: "#008751" }
        ],
		colors: ["#e8112d", "#008751", "#fcd116"]
    },
    {
        countryName: "Belgium",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 780" width="900" height="780">
            <path fill="#ed2939" d="M0 0h900v780H0z" class="A ease-3" data-fill="A"/>
            <path fill="#fae042" d="M0 0h600v780H0z" class="B ease-3" data-fill="B"/>
            <path d="M0 0h300v780H0z" class="C ease-3" data-fill="C" />
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#ed2939" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fae042" },
            { name: "C", defaultColor: "#495057", trueColor: "#000" }
        ],
		colors: ["#fae042", "#ed2939", "#000"]
    },
    {
        countryName: "Turkiye",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 800" width="1200" height="800">
            <rect width="1200" height="800" fill="#E30A17" class="A ease-5" data-fill="A"/>
            <circle cx="425" cy="400" r="200" class="B ease-5" fill="#ffffff" data-fill="B"/>
            <circle cx="475" cy="400" r="160" class="A ease-5" fill="#E30A17" data-fill="A" />
            <polygon class="C ease-5" fill="#ffffff" data-fill="C"
            points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221"/>
        </svg>`,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#E30A17" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#ffffff" },
            { name: "C", defaultColor: "#6C757D", trueColor: "#ffffff" }
        ],
		colors: ["#ffffff", "#E30A17", ]
    },
    {
        countryName: "Armenia",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 600" width="1200" height="600">
            <path fill="#F2A800" d="M0 0h1200v600H0z" class="A ease-3" data-fill="A"/>
            <path fill="#0033A0" d="M0 0h1200v400H0z" class="B ease-3" data-fill="B"/>
            <path fill="#D90012" d="M0 0h1200v200H0z" class="C ease-3" data-fill="C"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#F2A800" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#0033A0" },
            { name: "C", defaultColor: "#495057", trueColor: "#D90012" },
        ],
		colors: ["#0033A0", "#F2A800", "#D90012"]
    },
    {
        countryName: "Argentina",
        svg: `
        <svg  viewbox="0 0 800 500" width="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" height="500">
            <rect width="800" fill="#74acdf" height="500" class="A ease-3" data-fill="A"/>
            <rect y="166.67" width="800" fill="#fff" height="166.67" class="B ease-3" data-fill="B"/>
            <g id="rays">
            <path id="ray1" stroke-width="1.1116" class="C D ease-3" data-fill="C" data-stroke="D" stroke="#85340a" fill="#f6b40e" d="m396.84 251.31l28.454 61.992s0.4896 1.185 1.28 0.8586c0.7902-0.3267 0.2988-1.5116 0.2988-1.5116l-23.715-63.956m-0.68 24.12c-0.3465 9.4278 5.4526 14.613 4.6943 23.032-0.7569 8.42 3.8673 13.18 4.9396 16.454 1.0733 3.2744-1.16 5.2323-0.198 5.6982 0.96336 0.4662 3.07-2.1207 2.3833-6.7756-0.68675-4.6549-4.2204-6.0368-3.3898-16.32 0.83-10.283-4.206-12.678-2.98-22.058"/>
            <use xlink:href="#ray1" transform="rotate(22.5 400,250)"/>
            <use xlink:href="#ray1" transform="rotate(45 400,250)"/>
            <use xlink:href="#ray1" transform="rotate(67.5 400,250)"/>
            <path class="D ease-3" data-fill="D" id="ray2" fill="#85340a" d="m404.31 274.41c0.45334 9.0538 5.5867 13.063 4.5787 21.314 2.2133-6.5249-3.1233-11.583-2.82-21.22m-7.6487-23.757l19.487 42.577-16.329-43.887"/>
            <use xlink:href="#ray2" transform="rotate(22.5 400,250)"/>
            <use xlink:href="#ray2" transform="rotate(45 400,250)"/>
            <use xlink:href="#ray2" transform="rotate(67.5 400,250)"/>
            </g>
            <use xlink:href="#rays" transform="rotate(90 400,250)"/>
            <use xlink:href="#rays" transform="rotate(180 400,250)"/>
            <use xlink:href="#rays" transform="rotate(270 400,250)"/>
            <circle class="C D ease-3" data-fill="C" data-stroke="D" r="27.778" stroke="#85340a" cy="250" cx="400" stroke-width="1.5" fill="#f6b40e"/>
            <path id="loweyecontour" class="E ease-3" data-fill="E" fill="#843511" d="m409.47 244.06c-1.8967 0.00003-3.7131 0.82183-4.7812 2.5312 2.1367 1.9227 6.8565 2.1318 10.062-0.21875-1.3883-1.4954-3.3845-2.3125-5.2812-2.3125zm-0.0312 0.4375c1.8462-0.0335 3.5717 0.81446 3.8125 1.6562-2.1367 2.3504-5.5508 2.1463-7.6875 0.4375 0.9348-1.4957 2.4391-2.0677 3.875-2.0938z"/>
            <use xlink:href="#uppalpebra" transform="matrix(-1 0 0 1 800.25 0)"/>
            <use xlink:href="#eyebrow_nose" transform="matrix(-1 0 0 1 800.25 0)"/>
            <use xlink:href="#pupil" transform="translate(18.862)"/>
            <use xlink:href="#lowpalpebra" transform="matrix(-1 0 0 1 800.25 0)"/>
            <path class="D ease-3" data-fill="D" d="m395.75 253.84c-0.91341 0.16668-1.5625 0.97727-1.5625 1.9062 0 1.0614 0.87748 1.9062 1.9375 1.9062 0.62667 0 1.2025-0.2968 1.5625-0.8125 0.73952 0.55614 1.7646 0.61511 2.3125 0.625 0.0843 0.002 0.19312 0 0.25 0 0.54791-0.01 1.573-0.0689 2.3125-0.625 0.36 0.5157 0.93583 0.8125 1.5625 0.8125 1.06 0 1.9375-0.84488 1.9375-1.9062 0-0.92898-0.64918-1.7396-1.5625-1.9062 0.513 0.1809 0.84375 0.6765 0.84375 1.2188 0 0.7074-0.57124 1.2812-1.2812 1.2812-0.6804 0-1.2413-0.54015-1.2812-1.2188-0.20862 0.41637-1.0341 1.6551-2.6562 1.7188-1.6222-0.0636-2.4476-1.3024-2.6562-1.7188-0.04 0.6786-0.60085 1.2188-1.2812 1.2188-0.71001 0-1.2812-0.57385-1.2812-1.2812 0-0.54225 0.33075-1.0378 0.84375-1.2188z" fill="#85340a"/>
            <path class="D ease-3" data-fill="D" d="m397.84 259.53c-2.138 0-2.9829 1.9368-4.9062 3.2188 1.0687-0.42633 1.9096-1.2693 3.4062-2.125 1.496-0.85442 2.7717 0.1875 3.625 0.1875h0.0312c0.8532 0 2.129-1.0416 3.625-0.1875 1.4967 0.8559 2.3688 1.6987 3.4375 2.125-1.9233-1.282-2.7996-3.2188-4.9375-3.2188-0.4266 0-1.2716 0.23055-2.125 0.65625h-0.0312c-0.85334-0.42642-1.6983-0.65625-2.125-0.65625z" fill="#85340a"/>
            <path class="D ease-3" data-fill="D" d="m397.12 262.06c-0.8439 0.0374-1.9596 0.20675-3.5625 0.6875 3.8473-0.85434 4.6962 0.4375 6.4062 0.4375h0.0312c1.71 0 2.5588-1.292 6.4062-0.4375-4.2744-1.282-5.1242-0.4375-6.4062-0.4375h-0.0312c-0.80125 0-1.4372-0.3124-2.8438-0.25z" fill="#85340a"/>
            <path class="D ease-3" data-fill="D" d="m393.75 262.72c-0.24819 0.003-0.51871 0.005-0.8125 0.0312 4.488 0.42766 2.3306 3 7.0312 3h0.0312c4.7007 0 2.5745-2.5724 7.0625-3-4.7007-0.4266-3.2146 2.3438-7.0625 2.3438h-0.0312c-3.6075 0-2.4959-2.4215-6.2188-2.375z" fill="#85340a"/>
            <path class="D ease-3" data-fill="D" d="m403.85 269.66c0-2.1234-1.7233-3.8465-3.8463-3.8465-2.1233 0-3.8463 1.723-3.8463 3.8465 0.423-1.781 2.0166-3.0393 3.8463-3.0393 1.8333 0 3.424 1.2586 3.8463 3.0393v0 0z" fill="#85340a"/>
            <path class="D ease-3" data-fill="D" id="eyebrow_nose" fill="#85340a" d="m382.73 244.02c4.9146-4.2729 11.11-4.9147 14.53-1.7086 0.837 1.1207 1.3733 2.319 1.5934 3.5696 0.4302 2.433-0.3303 5.0617-2.2367 7.7559 0.2151-0.001 0.6435 0.2124 0.8568 0.4266 1.6967-3.244 2.2967-6.5761 1.74-9.7454-0.1458-0.828-0.3735-1.643-0.6696-2.4357-4.7007-3.8452-11.11-4.2729-15.811 2.1377z"/>
            <path class="D ease-3" data-fill="D" id="uppalpebra" fill="#85340a" d="m390.42 242.74c2.7767 0 3.4186 0.6417 4.7007 1.71 1.2833 1.0683 1.9233 0.8541 2.1367 1.0683 0.2124 0.2142 0 0.8541-0.4266 0.6399s-1.2833-0.6399-2.5633-1.7086c-1.2833-1.0696-2.5633-1.0683-3.8463-1.0683-3.8463 0-5.983 3.2046-6.4094 2.9907-0.4266-0.2142 2.1367-3.6325 6.4094-3.6325z"/>
            <use xlink:href="#loweyecontour" transform="translate(-19.181)"/>
            <circle id="pupil" cy="246.15" cx="390.54" r="1.923" fill="#85340a" class="D ease-3" data-fill="D" />
            <path class="D ease-3" data-fill="D" id="lowpalpebra" fill="#85340a" d="m385.29 247.44c3.6327 2.7783 7.265 2.5644 9.4017 1.282 2.1367-1.282 2.1367-1.7086 1.71-1.7086-0.4266 0-0.8532 0.4266-2.5633 1.281-1.71 0.8559-4.273 0.8559-8.546-0.8541z"/>
        </svg>
        `,
        colorGroups: [
            { name: "A", defaultColor: "#ADB5BD", trueColor: "#74acdf" },
            { name: "B", defaultColor: "#6C757D", trueColor: "#fff" },
            { name: "C", defaultColor: "#495057", trueColor: "#f6b40e" },
            { name: "D", defaultColor: "#CED4DA", trueColor: "#85340a" },
            { name: "E", defaultColor: "#343A40", trueColor: "#843511" },
        ],
		colors: ["#85340a", "#fff", "#843511", "#f6b40e", "#74acdf"]
    },
];

export default flags;