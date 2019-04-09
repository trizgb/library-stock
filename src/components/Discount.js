import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Discount extends Component {
  render() {
    const { getDiscount, applyDiscount, priceDiscount } = this.props;

    return (
      <div className="filter__discount-container">
        <form action="" className="filter__discount">
          <label htmlFor="" className="filter__discount-label">Apply Discount</label>
          <div className="discount__wraper-field">
            <input type="number" className="discount__field" onChange={getDiscount} value={priceDiscount} />
            <button type="button" className="discount__button" onClick={applyDiscount}><i className="fas fa-percentage"></i></button>
          </div>
        </form>
      </div>
    );
  }
}

Discount.propTypes = {
  getDiscount: PropTypes.func.isRequired,
  applyDiscount: PropTypes.func.isRequired,
};

export default Discount;