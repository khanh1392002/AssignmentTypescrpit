import React from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const Dashboard = (props: Props) => {
  return (
      <div>
        <div className="nav-menu" style={{margin: '0px 0px 25px 0px'}}>
          <nav className="navbar navbar-expand-lg   navbar-dark bg-dark ">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to={'/admin/category'}><a className="nav-link active" aria-current="page" >Category</a> </Link>
                  <Link to={'/admin/products'}><a className="nav-link active"  >Product</a></Link>
                  <a className="nav-link active" href="#">User</a>
                </div>
              </div>
            </div>
          </nav>
      </div>
    </div>
  )
}

export default Dashboard