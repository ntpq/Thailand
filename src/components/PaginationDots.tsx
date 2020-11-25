import React from "react";
interface Props {
  setPosition: (value: number) => void;
  activePosition: number;
}
function PaginationDots({ setPosition, activePosition }: Props) {
  const slide = [
    {
      pic:
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1494948949099-1311f3e907a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
  ];
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        top: "43%",
        right: "5%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {slide.map((item, index) => {
        if (index * -450 === activePosition) {
          return (
            <span
              onClick={() => setPosition(-450 * index)}
              key={index}
              style={{
                width: "12px",
                height: "12px",
                margin: "8px 0",
                cursor: "pointer",
                backgroundColor: "#01b3a7",
              }}
            />
          );
        }

        return (
          <span
            onClick={() => setPosition(-450 * index)}
            key={index}
            style={{
              width: "12px",
              height: "12px",
              margin: "8px 0",
              cursor: "pointer",
              backgroundColor: "gray",
            }}
          />
        );
      })}
    </div>
  );
}

export default PaginationDots;
