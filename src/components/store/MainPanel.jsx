import { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const API = "/api/api/v1/models/m_product?$select=Value,Name&$filter=AD_Client_ID eq 1000000 AND SM_Marca_ID eq 1000000&$top=12";

const MainPanel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [datos, setDatos] = useState([]);

  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState(12);
  const [paginas, setPaginas] = useState(0);

  const [txtBuscar, setTxtBuscar] = useState('');
  const URI = txtBuscar ? API + encodeURIComponent(txtBuscar) : API; 
  const getDatos = useCallback(async() => {
    if (!URI) {
      setError("No se proporcionó un término de búsqueda.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setDatos([]);

    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer eyJraWQiOiJpZGVtcGllcmUiLCJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJETUFSUVVFWiIsIkFEX0NsaWVudF9JRCI6MTAwMDAwMCwiQURfVXNlcl9JRCI6MTAwMDAxNSwiQURfUm9sZV9JRCI6MTAwMDAwMCwiQURfT3JnX0lEIjowLCJBRF9MYW5ndWFnZSI6ImVzX0NPIiwiQURfU2Vzc2lvbl9JRCI6MTExMTQ4MSwiaXNzIjoiaWRlbXBpZXJlLm9yZyJ9.pn2E40xqX7dHQfHHfd_d33r9CNP7phQhWX1kftjesmiv1xPoZM4V4LnH6m2GaF0Fx7lKho4olxOrFT8wuBKrEg"
        },
        redirect: "follow"
      };  
      const response = await fetch(URI, requestOptions);
      if (!response.ok)
        throw new Error("HTTP Error: " + response.status);

      const data = await response.json();
      setDatos(data.records);
      setPaginas(data);
      setTotal(data.total)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [URI]);

  const manejoEnvio = (event) => {
    event.preventDefault();

    if (!txtBuscar.trim()) {
      alert("Por favor, ingresa un término de búsqueda.");
      return;
    }

    getDatos();
    setTxtBuscar('');
  };

  useEffect(() => {
    getDatos();
  }, [skip]);

  if (error) {
    return (
      <p>Oops! {error}</p>
    );
  }

  return (
    <div className="col-lg-9 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
      <div className="rounded mb-4 position-relative">
        <img src="img/product-banner-3.jpg" className="img-fluid rounded w-100" style={{ height: 250 }} alt="Image" />
        <div className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ width: '100%', height: 250, top: 0, left: 0, background: 'rgba(242, 139, 0, 0.3)' }}>
          <h4 className="display-5 text-primary">SALE</h4>
          <h3 className="display-4 text-white mb-4">Get UP To 50% Off</h3>
          <a href="#" className="btn btn-primary rounded-pill">Shop Now</a>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-xl-7">
          <form className="d-flex" role="search" onSubmit={manejoEnvio}>
            <input 
              type="search" 
              className="form-control p-3"
              placeholder="Buscar" 
              value={txtBuscar} 
              aria-label="Search" 
              aria-describedby="search-icon-1"
              onChange={(e) => setTxtBuscar(e.target.value)} 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="row">
          {datos.length > 0 ? (
            <>
              {datos.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}

              <div className="d-flex justify-content-between">
                <p className="lead m-0 fw-bold text-sombra text-white">Pagina {Math.floor(skip / paginas) + 1} de {paginas}</p>
                <nav>
                  <ul className="pagination m-0">
                    <li className="page-item">
                      <a className="page-link" href="#"
                        onClick={() => {
                          if (skip >= paginas) {
                            setSkip(skip - paginas);
                          }
                        }}
                      >
                        &lt;&lt;
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {Math.floor(skip / paginas) + 1}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#"
                        onClick={() => {
                          if (skip + paginas < total) {
                            setSkip(skip + paginas);
                          }
                        }}
                      >
                        &gt;&gt;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          ) : (
            <p>No hay nada</p>
          )}
        </div>
      )}
    </div>
  )
}

export default MainPanel