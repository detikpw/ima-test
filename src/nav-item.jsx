import React from 'react';
import PropTypes from 'prop-types';
import down from './chevron-down.svg'


const navItem = ({ children, className }) => (
  <a className={className}>
    {children}
    <img className="inline" src={down} />
  </a>
)

navItem.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default navItem;