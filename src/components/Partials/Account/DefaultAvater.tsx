
const DefaultAvatar = ({ size = 100, color = "#d6e0e8" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${size} ${size}`}
            fill={color}
            aria-labelledby="default-avatar-title"
        >
            <title id="default-avatar-title">Default avatar</title>
            <g id="person">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 15}
                    fill={color}
                />
                <circle cx={size / 3} cy={size / 4} r={3} fill="#1d262f" />
                <circle
                    cx={(size * 2) / 3}
                    cy={size / 4}
                    r={3}
                    fill="#1d262f"
                />
                <path
                    d={`M${size / 3.5},${size / 3} C${size / 3.5},${size / 3} ${
                        size / 2.5
                    },${size / 2.8} ${size / 2},${size / 2.8} C${size / 1.5},${
                        size / 2.8
                    } ${size / 2.5},${size / 3} ${size / 2.5},${size / 3}`}
                    stroke="#1d262f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d={`M${size / 2},${(size * 2) / 3} C${size / 2},${
                        (size * 2) / 3
                    } ${(size * 3) / 5},${(size * 5) / 6} ${size / 2},${
                        (size * 5) / 6
                    }`}
                    stroke="#1d262f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d={`M${size / 4},${size / 4} C${size / 4},${size / 4} ${
                        size / 2.5
                    },${size / 6} ${size / 2},${size / 6} C${(size * 3) / 5},${
                        size / 6
                    } ${size / 2.5},${size / 4} ${size / 2.5},${size / 4} L${
                        size / 2.5
                    },${(size * 3) / 4} C${size / 2.5},${(size * 3) / 4} ${
                        (size * 3) / 5
                    },${(size * 7) / 8} ${size / 2},${(size * 7) / 8} C${
                        size / 1.5
                    },${(size * 7) / 8} ${(size * 3) / 5},${(size * 3) / 4} ${
                        (size * 3) / 5
                    },${(size * 3) / 4} L${size / 4},${size / 4} Z`}
                    fill={color}
                />
            </g>
        </svg>
    );
};

export default DefaultAvatar;
