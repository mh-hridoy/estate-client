import React from "react"

const MyApplication = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        // alignItems: "center",
        width: "1oovw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "90%",
          width: "90%",
          marginTop: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "bolder", fontSize: 30 }}>
          Estates Community App Preview
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
            overflow: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/homepage.png"
            alt="Home Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/login.png"
            alt="Login Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/dashboard.png"
            alt="Dashboard Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/manageaccount.png"
            alt="Manage Account Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/notification.png"
            alt="Notification Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/propertydetails.png"
            alt="Property Details Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/searcg.png"
            alt="Search Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/searchmap.png"
            alt="Search Map Screen"
          />
          <img
            className="appPrev"
            height="80%"
            width="200px"
            src="/searchresult.png"
            alt="Search Result Screen"
          />
        </div>
      </div>
    </div>
  )
}

export default MyApplication
