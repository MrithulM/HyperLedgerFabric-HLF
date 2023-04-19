import CarCard from "../CarCard/CarCard";
import "./DisplayCarInfo.css";
export default function DisplayCarInfo(props) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: "10px" }}>Car data</h2>
      <div className="card-holder">
        {Object.keys(props.carInfo).length !== 0 ? (
          props.searchAll && Array.isArray(props.carInfo) ? (
            props.carInfo.map((car) => (
              <CarCard
                key={car.Key}
                id={car.Key}
                record={car.Record}
                setClickedCar={props.setClickedCar}
                carModalOpen={props.carModalOpen}
              />
            ))
          ) : (
            <CarCard
              id={props.carId}
              record={props.carInfo}
              setClickedCar={props.setClickedCar}
              carModalOpen={props.carModalOpen}
            />
          )
        ) : (
          <p style={{ marginLeft: "520px" }}>none</p>
        )}
      </div>
    </div>
  );
}
