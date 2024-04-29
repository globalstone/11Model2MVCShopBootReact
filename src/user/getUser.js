import React from 'react';
import { useUser } from './UserContext';

function UserProfile() {
  const { user, setUser } = useUser();

  const handleEditProfile = () => {
    window.location.href = `/user/updateUser?userId=${user.userId}`;
  };

  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1 id="navs">Profile</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">{user.userId}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">UserName</th>
                <td>{user.userName}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">ADDR</th>
                <th scope="col">{user.addr}준비중</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">Phone</th>
                <td>{user.phone || ''}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">email</th>
                <th scope="col">{user.email}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">RegDate</th>
                <td>{user.regDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <button type="button" className="btn btn-primary" id="edit" onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
