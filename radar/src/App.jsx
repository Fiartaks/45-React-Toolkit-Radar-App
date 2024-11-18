import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightAction";
import Modal from "./components/Modal";

const App = () => {
  const [isMapView, setMapView] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  const openModal = (id) => {
    setDetailId(id); // hangi ucak icin acildigini belirtir
    setIsOpen(true); // modali acar
  };

  const closeModal = () => {
    setIsOpen(false); // modali kapatir
    setDetailId(null); // modali kapatirken id sini siler
  };

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header   />

      <div   className="view-buttons" >
        <button 
          className={isMapView ? "active" : ""}
          onClick={() => setMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? "active" : ""}
          onClick={() => setMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? <MapView openModal={openModal} /> : <ListView openModal={openModal} />}

      {/* Modal bilesinei */}

      {isOpen && (<Modal detailId={detailId} closeModal={closeModal} />)}
    </>
  );
};
export default App;
