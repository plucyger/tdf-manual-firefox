import React from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = () => {
      return (
        <nav className="bg-primary-blue p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-h3 font-bold">TDF MVP</Link>
            <div>
              <Link to="/jobs" className="text-white mx-2">Jobs</Link>
              <Link to="/organizations" className="text-white mx-2">Organizations</Link>
              <Link to="/experts" className="text-white mx-2">Experts</Link>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
