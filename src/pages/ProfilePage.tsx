import "../styles/offers.css";
import "../styles/profilePage.css";
import "../../node_modules/mdb-ui-kit/css/mdb.min.css";
import { useEffect, useState } from "react";

type Offer = {
  id      : number
  name    : string 
  price   : string
  minuts  : string
  mb      : string
  sms     : string
  duration: string
  icon    : string 
}
type User = {
  id      : number    
  name    : string
  email   : string 
  number  : string  
  password: string
  balance : string  
  offers  : Offer[]
}
export function ProfilePage({ currentUser }: any) {
  const [offers, setOffers] = useState([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("http://localhost:3010/offers", {
      method: "GET",
      headers: { Authorization: localStorage.token },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setOffers(resp);
        console.log(resp);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3010/user", {
      method: "GET",
      headers: { Authorization: localStorage.token },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setUser(resp);
        console.log(resp);
      });
  }, []);

  let minutes = 0;
  for (const iterator of offers) {
    minutes += Number(iterator.minuts);
  }

  let mb = 0;
  for (const iterator of offers) {
    mb += iterator.mb;
  }

  let SMS = 0;
  for (const iterator of offers) {
    SMS += Number(iterator.sms);
  }

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-row back--ground"
                style={{ height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: 1 }}
                  />
                  <button
                    type="button"
                    id="button-outline"
                    className="btn btn-outline-dark button-col"
                    data-mdb-ripple-color="dark"
                    style={{ zIndex: 1 }}
                  >
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5 className="text-color">{currentUser?.name}</h5>
                  <p className="text-color">New York</p>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">{mb}</p>
                    <p className="small text-muted mb-0">Mb</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">{Number(minutes)}</p>
                    <p className="small text-muted mb-0">Minutes</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{Number(SMS)}</p>
                    <p className="small text-muted mb-0">SMS</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">
                    {offers
                      ? "Offerts in use:"
                      : "Your have not subscribet to any of our offers"}
                  </p>
                  <p className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                <div className="offers_item-wrapper">
                  {offers.map((offer, index) => (
                    <div className="offers_item" key={offer.id}>
                      <span className="offers__icon">
                        <i className={offer.icon}></i>
                      </span>
                      <h3 className="offers__title">{offer.name}</h3>
                      <p className="description">{offer.mb}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
