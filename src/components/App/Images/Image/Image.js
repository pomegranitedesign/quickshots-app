import React from 'react';

export default (props) => (
  <div key={props.id} style={{ marginBottom: 30 }}>
    <a href={`https://unsplash.com/@${props.user.username}?utm_source=UNAPIS&utm_medium=referral`} style={{ textDecoration: "none", color: "#5f27cd" }} ><h3 className="userName">@{props.user.name}</h3></a>
    <img src={props.user.profile_image.large} style={{ height: 60, width: 60 }} alt=""/>
    <img src={props.urls.regular} 
        alt={props.urls.thumb}
        className="mainImage"
    />
    <hr />
  </div>
);