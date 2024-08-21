
function Card({ name, id,  avatar_url, point }) {
  return (
      <div
          style={{
              width: "40%",
              height: "200px",
              textAlign: "justify",
              padding: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "1px solid black",
              display: "block",
              borderRadius: "8px",
              marginTop: "20px",
              boxSizing: "border-box",
              textAlign:"center",
          }}
      >
          <div style={{ display: "flex", alignItems: "center" }}>
              <img
                  src={avatar_url || 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'}
                  alt="avatar"
                  style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }}
              />
              <div>
                  <h1>{name}</h1>
                  <p>{point}</p>
              </div>
             <h2>{id}</h2>
          </div>
      </div>
  );
}

export default Card;
